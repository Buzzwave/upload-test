
import { Stack } from 'aws-cdk-lib';
import { Effect, Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { EventSourceMapping, StartingPosition } from 'aws-cdk-lib/aws-lambda';

import { defineBackend } from '@aws-amplify/backend';

import { auth } from './auth/resource';
import { data } from './data/resource';
import { createAccount } from './functions/create-account/resource';
import { createCampaign } from './functions/create-campaign/resource';
import { createEvent } from './functions/create-event/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  createAccount,
  createEvent,
  createCampaign,
  storage
});

// Add IAM permissions to createAccount Lambda
const createAccountLambda = backend.createAccount.resources.lambda
const statement = new PolicyStatement({
  sid: "AllowCognitoCreateGroup",
  actions: [
    "cognito-idp:AdminAddUserToGroup",
    "cognito-idp:CreateGroup",
    "cognito-idp:GetGroup"
  ],
  resources: ["*"],
})
createAccountLambda.addToRolePolicy(statement)

// Event table create lambda trigger
const eventTable = backend.data.resources.tables["Event"]
backend.createEvent.resources.lambda.role?.attachInlinePolicy(
  new Policy(
    Stack.of(eventTable),
    "DynamoDBPolicy",
    {
      statements: [
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: [
            "dynamodb:DescribeStream",
            "dynamodb:GetRecords",  
            "dynamodb:GetShardIterator",
            "dynamodb:ListStreams",
          ],
          resources: ["*"],
        }),
      ],
    }
  )
);

new EventSourceMapping(
  Stack.of(eventTable),
  "eventTableEventSourceMapping",
  {
    target: backend.createEvent.resources.lambda,
    eventSourceArn: eventTable.tableStreamArn,
    startingPosition: StartingPosition.LATEST,
  }
);

// Campaign table create lambda trigger
const campaignTable = backend.data.resources.tables["Campaign"]
backend.createCampaign.resources.lambda.role?.attachInlinePolicy(
  new Policy(
    Stack.of(campaignTable),
    "DynamoDBPolicy",
    {
      statements: [
        new PolicyStatement({
          effect: Effect.ALLOW,
          actions: [
            "dynamodb:DescribeStream",
            "dynamodb:GetRecords",  
            "dynamodb:GetShardIterator",
            "dynamodb:ListStreams",
          ],
          resources: ["*"],
        }),
      ],
    }
  )
);

new EventSourceMapping(
  Stack.of(campaignTable),
  "campaignTableEventSourceMapping",
  {
    target: backend.createCampaign.resources.lambda,
    eventSourceArn: campaignTable.tableStreamArn,
    startingPosition: StartingPosition.LATEST,
  }
);
