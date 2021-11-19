import { CfnOutput, cfnTagToCloudFormation, Construct, Stage, StageProps } from '@aws-cdk/core';
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend'
import * as path from 'path'
import * as cdk from '@aws-cdk/core'

/**
 * Deployable unit of web service app
 */
export class AmplifyStage extends Stage {
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const amplifyStack = new AmplifyExportedBackend(this, "amplifyExportedBackend", {
      amplifyEnvironment: "dev",
      path: path.resolve(__dirname, '..', 'amplify-export-<YOUR_AMPLIFY_APP>')
    })
  }
}
