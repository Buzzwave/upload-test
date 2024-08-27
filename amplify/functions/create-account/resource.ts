import { defineFunction } from '@aws-amplify/backend';

/**
 * This function is called by the app when a user registers.
 * It creates read/write groups in Cognito, then the 
 * clientAccount and user entries in DynamoDB tables.
 * */
export const createAccount = defineFunction({
  name: 'createAccount',
  entry: './handler.ts'
});
