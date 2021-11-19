import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { OtherApiStack } from '../stacks/other-api-stack';

/**
 * Deployable unit of web service app
 */
export class OtherApiStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new OtherApiStack(this, 'WebService');
    
    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}
