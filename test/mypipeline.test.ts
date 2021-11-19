import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Mypipeline from '../lib/stacks/other-api-stack';

test('Empty Stack', () => {
    // const app = new cdk.App();
    // // WHEN
    // const stack = new Mypipeline.MypipelineStack(app, 'MyTestStack');
    // // THEN
    // expectCDK(stack).to(matchTemplate({
    //   "Resources": {}
    // }, MatchStyle.EXACT));
});
