import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend'
import * as path from 'path'

/**
 * Deployable unit of web service app
 */
export class AmplifyStage extends Stage {

  public readonly apiKey: CfnOutput
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const amplifyStack = new AmplifyExportedBackend(this, "amplifyExportedBackend", {
      amplifyEnvironment: "dev",
      path: path.resolve(__dirname, 'amplify-export-amplifiedshopping')
    })

    this.apiKey = new CfnOutput(this, "ApiKey", {
      value: amplifyStack.graphqlNestedStacks().appSyncAPIKey().attrApiKey
    })
  }
}
