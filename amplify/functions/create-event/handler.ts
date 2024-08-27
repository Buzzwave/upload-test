import type { DynamoDBStreamHandler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../data/resource';
import { updateEvent } from './graphql/mutations';
import { Amplify } from 'aws-amplify';
import { env } from '$amplify/env/createEvent';

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler2",
});

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT, // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: 'identityPool'
      }
    }
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);
const client = generateClient<Schema>();

export const handler: DynamoDBStreamHandler = async (event) => {
  for (const record of event.Records) {
    logger.info(`updateEvent: Processing record: ${record.eventID}`);
    logger.info(`updateEvent: Event Type: ${record.eventName}`);

    if (record.eventName === "INSERT") {
      // business logic to process new records
      logger.info(`updateEvent: New Image: ${JSON.stringify(record.dynamodb?.NewImage)}`);

      const readGroupName = `Read-${record.dynamodb?.NewImage?.clientAccountId.S}`
      const writeGroupName = `Write-${record.dynamodb?.NewImage?.clientAccountId.S}`

      const eventUpdate = await client.graphql({
        query: updateEvent,
        variables: {
          input: {
            eventId: record.dynamodb?.NewImage?.eventId.S ?? '',
            readGroups: [readGroupName],
            writeGroups: [writeGroupName],
          },
        },
      });

      if (eventUpdate.errors) {
        eventUpdate.errors.forEach(error => {
          throw error;
        });
      }
    }
  }
  logger.info(`updateEvent: Successfully processed ${event.Records.length} records.`);

  return {
    batchItemFailures: [],
  };
};
