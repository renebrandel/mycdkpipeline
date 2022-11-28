import { CfnOutput, cfnTagToCloudFormation, Construct, Stage, StageProps } from '@aws-cdk/core';
// IMPORT AMPLIFY EXPORTED BACKEND HERE
import * as path from 'path'
import * as cdk from '@aws-cdk/core'
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend/lib/export-backend';

export class AmplifyStage extends Stage {
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    
    // ADD AMPLIFY EXPORTED BACKEND STACK HERE
    const amplifyStack = new AmplifyExportedBackend(this, "amplifyexportedbackend", {
      path: path.resolve('../../../lib/amplify-export-caserep'),
      amplifyEnvironment: "dev"
    })
  }
}
