import { env } from '$amplify/env/createAccount';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

import { Schema } from '../../data/resource';
import { addToDebugLog, writeToErrorLog } from '../helpers/utils';
import { createClientAccount, createUser, deleteClientAccount } from './graphql/mutations';
import { Handler } from 'aws-lambda';

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "identityPool",
      },
    },
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

let awsRequestId: string = '';
let nowUtc: string = '';
let debugLogging = false;
let clientAccountId: string = '';
let debugLog: string[] = [];
let cognito = new AWS.CognitoIdentityServiceProvider();

export const handler: Handler = async (event, context) => {
  try {
    debugLogging = event.arguments.debugLogging ?? false;
    addToDebugLog('INFO', `Function started with logging enabled: ${debugLogging}`, debugLog, debugLogging);
    awsRequestId = context.awsRequestId;
    nowUtc = (new Date()).toISOString();

    const userPoolId = env.AMPLIFY_AUTH_USERPOOL_ID;

    // Prepare params and query input
    awsRequestId = context.awsRequestId;
    const companyName = event.arguments.companyName;
    const industry = event.arguments.industry;
    const annualEventCount = event.arguments.annualEventCount;
    const averageEventAttendance = event.arguments.averageEventAttendance;
    const currencyCode = event.arguments.currencyCode;
    const userId = event.arguments.userId;
    const givenName = event.arguments.givenName;
    const familyName = event.arguments.familyName;
    const jobTitle = event.arguments.jobTitle;
    const email = event.arguments.email;
    const mobilePhoneCountryCode = event.arguments.mobilePhoneCountryCode;
    const mobilePhone = event.arguments.mobilePhone;

    clientAccountId = uuidv4();

    // Create the read
    const readGroup = {
      Description: `Read group for ${companyName}`,
      GroupName: `Read-${clientAccountId}`,
      Precedence: 2,
      UserPoolId: userPoolId,
    };

    const newReadGroup: AWS.CognitoIdentityServiceProvider.CreateGroupResponse | undefined = await new Promise((resolve, reject) => {
      return cognito.createGroup(readGroup, function (err, data) {
        if (err) {
          throw err;
        } else {
          resolve(data);
        }
      });
    });

    if (newReadGroup === undefined) {
      throw new Error('Failed to create read group');
    }

    cognito.adminAddUserToGroup({
      UserPoolId: userPoolId ?? '',
      Username: userId,
      GroupName: newReadGroup.Group?.GroupName ?? ''
    }, function (err, data) {
      if (err) {
        throw err;
      }
    });

    const readGroups: string[] = [`Read-${clientAccountId}`];

    const writeGroup = {
      Description: `Write group for ${companyName}`,
      GroupName: `Write-${clientAccountId}`,
      Precedence: 1,
      UserPoolId: userPoolId,
    };

    const newWriteGroup: AWS.CognitoIdentityServiceProvider.CreateGroupResponse | undefined = await new Promise((resolve, reject) => {
      return cognito.createGroup(writeGroup, function (err, data) {
        if (err) {
          throw err;
        } else {
          resolve(data);
        }
      });
    });

    if (newWriteGroup === undefined) {
      throw new Error('Failed to create write group');
    }

    cognito.adminAddUserToGroup({
      UserPoolId: userPoolId ?? '',
      Username: userId,
      GroupName: newWriteGroup.Group?.GroupName ?? ''
    }, function (err, data) {
      if (err) {
        throw err;
      }
    });

    const writeGroups: string[] = [`Write-${clientAccountId}`];

    const clientAccount = {
      clientAccountId: clientAccountId,
      companyName: companyName,
      industry: industry,
      // address1: '',
      // address2: '',
      // city: '',
      // state: '',
      // zip: '',
      // country: '',
      annualEventCount: annualEventCount,
      averageEventAttendance: averageEventAttendance,
      currencyCode: currencyCode,
      // licenseKey: '',
      // licenseKeyValidUntil: '',
      readGroups: readGroups,
      writeGroups: writeGroups,

      // Audit
      createdBy: userId,
      updatedBy: userId,
      disabled: false
    };

    const clientAccountCreate = await client.graphql({
      query: createClientAccount,
      variables: {
        input: clientAccount
      },
    });

    if (clientAccountCreate.errors) {
      clientAccountCreate.errors.forEach(error => {
        throw error;
      });
    }

    const user = {
      userId: userId,
      givenName: givenName,
      familyName: familyName,
      jobTitle: jobTitle,
      email: email,
      clientAccountId: clientAccount.clientAccountId,
      mobilePhoneCountryCode: mobilePhoneCountryCode,
      mobilePhone: mobilePhone,
      owner: userId,

      // Audit
      createdBy: userId,
      updatedBy: userId,
      disabled: false
    };

    const userCreate = await client.graphql({
      query: createUser,
      variables: {
        input: user
      },
    });

    if (userCreate.errors) {
      // Remove the client account that was created
      await client.graphql({
        query: deleteClientAccount,
        variables: {
          input: {
            clientAccountId: clientAccount.clientAccountId
          },
        },
      });

      userCreate.errors.forEach(error => {
        throw error;
      });
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(userCreate.data.createUser),
    };

    return response;
  }
  catch (err: any) {
    debugLogging ? console.error(err) : null;
    await writeToErrorLog('create-account', clientAccountId, '', err.toString(), awsRequestId, nowUtc, err.stack, JSON.stringify(debugLog));

    throw err;
  }
};
