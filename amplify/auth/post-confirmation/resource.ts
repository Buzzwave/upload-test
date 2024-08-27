import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  // Environment vars are defined in the function's environment
  environment: {
    GROUP_NAME: 'Everyone'
  }
});
