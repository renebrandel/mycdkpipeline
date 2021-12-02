import { CfnOutput, cfnTagToCloudFormation, Construct, Stage, StageProps } from '@aws-cdk/core';
import { CfnBucket } from '@aws-cdk/aws-s3';
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend';
import * as path from 'path'
import * as cdk from '@aws-cdk/core'

export class AmplifyStage extends Stage {
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    // ADD AMPLIFY EXPORTED BACKEND STACK HERE
    const amplifyBackend = new AmplifyExportedBackend(this, "amplify-stack", {
      amplifyEnvironment: "prod",
      path: path.resolve(__dirname, '..', 'stacks', 'amplify-exportamplifyhomes')
    })
  }
}
