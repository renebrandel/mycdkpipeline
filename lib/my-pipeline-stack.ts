import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";
import { OtherApiStage } from './other-api-stage';
import { AmplifyStage } from './amplify-stage';

/**
 * The stack that defines the application pipeline
 */
 export class MyPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      pipelineName: 'MyCdkPipeline',

       // How it will be built and synthesized
       synth: new ShellStep('Synth', {
         // Where the source can be found
         input: CodePipelineSource.gitHub('renebrandel/newexport', 'main'),
         
         // Install dependencies, build and run cdk synth
         commands: [
           'npm ci',
           'npm run build',
           'npx cdk synth',
         ],
       }),
    });

    // This is where we add the application stages
    const amplifyApp = new AmplifyStage(this, "amplifyStage")
    const amplifyStage = pipeline.addStage(amplifyApp)
    amplifyStage.addPost(new ShellStep("AmplifyExportPull", {
      commands: [
        'npm i -g @aws-amplify/cli',
        `amplify export pull --rootStackName ${amplifyApp.rootStackName} --out ./`,
        'cat aws-exports.js'
      ]
    }))
    pipeline.addStage(new OtherApiStage(this, "otherApiStage"))
  }
}
