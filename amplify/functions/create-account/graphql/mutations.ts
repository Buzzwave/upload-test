/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const CreateAccount = /* GraphQL */ `mutation CreateAccount(
  $annualEventCount: String!
  $averageEventAttendance: String!
  $companyName: String!
  $currencyCode: String!
  $debugLogging: Boolean
  $email: String!
  $familyName: String!
  $givenName: String!
  $industry: String!
  $jobTitle: String!
  $mobilePhone: String!
  $mobilePhoneCountryCode: String!
  $userId: String!
) {
  CreateAccount(
    annualEventCount: $annualEventCount
    averageEventAttendance: $averageEventAttendance
    companyName: $companyName
    currencyCode: $currencyCode
    debugLogging: $debugLogging
    email: $email
    familyName: $familyName
    givenName: $givenName
    industry: $industry
    jobTitle: $jobTitle
    mobilePhone: $mobilePhone
    mobilePhoneCountryCode: $mobilePhoneCountryCode
    userId: $userId
  )
}
` as GeneratedMutation<
  APITypes.CreateAccountMutationVariables,
  APITypes.CreateAccountMutation
>;
export const createCampaign = /* GraphQL */ `mutation CreateCampaign(
  $condition: ModelCampaignConditionInput
  $input: CreateCampaignInput!
) {
  createCampaign(condition: $condition, input: $input) {
    campaignId
    campaignStatus
    clientAccountId
    confirmationPageUrl
    createdAt
    createdBy
    description
    disabled
    event {
      clientAccountId
      closingDate
      createdAt
      createdBy
      description
      disabled
      eventId
      location
      logoImageUrl
      name
      openingDate
      readGroups
      updatedAt
      updatedBy
      websiteUrl
      writeGroups
      __typename
    }
    eventId
    modalButtonText
    modalDomainPath
    modalIncentiveTCs
    modalIncentiveText
    modalPattern
    modalPatternLocationEnum
    modalText
    modalTitle
    name
    postForwardUrl
    postImageUrl
    postText
    readGroups
    registrationPageUrl
    targetInfluencerTypeEnum
    updatedAt
    updatedBy
    valueOfAcquisition
    valueOfClick
    valueOfPost
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCampaignMutationVariables,
  APITypes.CreateCampaignMutation
>;
export const createClientAccount = /* GraphQL */ `mutation CreateClientAccount(
  $condition: ModelClientAccountConditionInput
  $input: CreateClientAccountInput!
) {
  createClientAccount(condition: $condition, input: $input) {
    address1
    address2
    annualEventCount
    averageEventAttendance
    city
    clientAccountId
    companyName
    country
    createdAt
    createdBy
    currencyCode
    disabled
    events {
      nextToken
      __typename
    }
    industry
    licenseKey
    licenseKeyValidUntil
    readGroups
    state
    updatedAt
    updatedBy
    users {
      nextToken
      __typename
    }
    writeGroups
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientAccountMutationVariables,
  APITypes.CreateClientAccountMutation
>;
export const createErrorLog = /* GraphQL */ `mutation CreateErrorLog(
  $condition: ModelErrorLogConditionInput
  $input: CreateErrorLogInput!
) {
  createErrorLog(condition: $condition, input: $input) {
    awsRequestId
    campaignId
    clientAccountId
    createdAt
    createdBy
    disabled
    errorLogId
    errorMessage
    functionName
    metadata
    readGroups
    stack
    updatedAt
    updatedBy
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateErrorLogMutationVariables,
  APITypes.CreateErrorLogMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $condition: ModelEventConditionInput
  $input: CreateEventInput!
) {
  createEvent(condition: $condition, input: $input) {
    campaigns {
      nextToken
      __typename
    }
    clientAccount {
      address1
      address2
      annualEventCount
      averageEventAttendance
      city
      clientAccountId
      companyName
      country
      createdAt
      createdBy
      currencyCode
      disabled
      industry
      licenseKey
      licenseKeyValidUntil
      readGroups
      state
      updatedAt
      updatedBy
      writeGroups
      zip
      __typename
    }
    clientAccountId
    closingDate
    createdAt
    createdBy
    description
    disabled
    eventId
    location
    logoImageUrl
    name
    openingDate
    readGroups
    updatedAt
    updatedBy
    websiteUrl
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    clientAccount {
      address1
      address2
      annualEventCount
      averageEventAttendance
      city
      clientAccountId
      companyName
      country
      createdAt
      createdBy
      currencyCode
      disabled
      industry
      licenseKey
      licenseKeyValidUntil
      readGroups
      state
      updatedAt
      updatedBy
      writeGroups
      zip
      __typename
    }
    clientAccountId
    createdAt
    createdBy
    disabled
    email
    familyName
    givenName
    jobTitle
    mobilePhone
    mobilePhoneCountryCode
    owner
    updatedAt
    updatedBy
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteCampaign = /* GraphQL */ `mutation DeleteCampaign(
  $condition: ModelCampaignConditionInput
  $input: DeleteCampaignInput!
) {
  deleteCampaign(condition: $condition, input: $input) {
    campaignId
    campaignStatus
    clientAccountId
    confirmationPageUrl
    createdAt
    createdBy
    description
    disabled
    event {
      clientAccountId
      closingDate
      createdAt
      createdBy
      description
      disabled
      eventId
      location
      logoImageUrl
      name
      openingDate
      readGroups
      updatedAt
      updatedBy
      websiteUrl
      writeGroups
      __typename
    }
    eventId
    modalButtonText
    modalDomainPath
    modalIncentiveTCs
    modalIncentiveText
    modalPattern
    modalPatternLocationEnum
    modalText
    modalTitle
    name
    postForwardUrl
    postImageUrl
    postText
    readGroups
    registrationPageUrl
    targetInfluencerTypeEnum
    updatedAt
    updatedBy
    valueOfAcquisition
    valueOfClick
    valueOfPost
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCampaignMutationVariables,
  APITypes.DeleteCampaignMutation
>;
export const deleteClientAccount = /* GraphQL */ `mutation DeleteClientAccount(
  $condition: ModelClientAccountConditionInput
  $input: DeleteClientAccountInput!
) {
  deleteClientAccount(condition: $condition, input: $input) {
    address1
    address2
    annualEventCount
    averageEventAttendance
    city
    clientAccountId
    companyName
    country
    createdAt
    createdBy
    currencyCode
    disabled
    events {
      nextToken
      __typename
    }
    industry
    licenseKey
    licenseKeyValidUntil
    readGroups
    state
    updatedAt
    updatedBy
    users {
      nextToken
      __typename
    }
    writeGroups
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientAccountMutationVariables,
  APITypes.DeleteClientAccountMutation
>;
export const deleteErrorLog = /* GraphQL */ `mutation DeleteErrorLog(
  $condition: ModelErrorLogConditionInput
  $input: DeleteErrorLogInput!
) {
  deleteErrorLog(condition: $condition, input: $input) {
    awsRequestId
    campaignId
    clientAccountId
    createdAt
    createdBy
    disabled
    errorLogId
    errorMessage
    functionName
    metadata
    readGroups
    stack
    updatedAt
    updatedBy
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteErrorLogMutationVariables,
  APITypes.DeleteErrorLogMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $condition: ModelEventConditionInput
  $input: DeleteEventInput!
) {
  deleteEvent(condition: $condition, input: $input) {
    campaigns {
      nextToken
      __typename
    }
    clientAccount {
      address1
      address2
      annualEventCount
      averageEventAttendance
      city
      clientAccountId
      companyName
      country
      createdAt
      createdBy
      currencyCode
      disabled
      industry
      licenseKey
      licenseKeyValidUntil
      readGroups
      state
      updatedAt
      updatedBy
      writeGroups
      zip
      __typename
    }
    clientAccountId
    closingDate
    createdAt
    createdBy
    description
    disabled
    eventId
    location
    logoImageUrl
    name
    openingDate
    readGroups
    updatedAt
    updatedBy
    websiteUrl
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    clientAccount {
      address1
      address2
      annualEventCount
      averageEventAttendance
      city
      clientAccountId
      companyName
      country
      createdAt
      createdBy
      currencyCode
      disabled
      industry
      licenseKey
      licenseKeyValidUntil
      readGroups
      state
      updatedAt
      updatedBy
      writeGroups
      zip
      __typename
    }
    clientAccountId
    createdAt
    createdBy
    disabled
    email
    familyName
    givenName
    jobTitle
    mobilePhone
    mobilePhoneCountryCode
    owner
    updatedAt
    updatedBy
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateCampaign = /* GraphQL */ `mutation UpdateCampaign(
  $condition: ModelCampaignConditionInput
  $input: UpdateCampaignInput!
) {
  updateCampaign(condition: $condition, input: $input) {
    campaignId
    campaignStatus
    clientAccountId
    confirmationPageUrl
    createdAt
    createdBy
    description
    disabled
    event {
      clientAccountId
      closingDate
      createdAt
      createdBy
      description
      disabled
      eventId
      location
      logoImageUrl
      name
      openingDate
      readGroups
      updatedAt
      updatedBy
      websiteUrl
      writeGroups
      __typename
    }
    eventId
    modalButtonText
    modalDomainPath
    modalIncentiveTCs
    modalIncentiveText
    modalPattern
    modalPatternLocationEnum
    modalText
    modalTitle
    name
    postForwardUrl
    postImageUrl
    postText
    readGroups
    registrationPageUrl
    targetInfluencerTypeEnum
    updatedAt
    updatedBy
    valueOfAcquisition
    valueOfClick
    valueOfPost
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCampaignMutationVariables,
  APITypes.UpdateCampaignMutation
>;
export const updateClientAccount = /* GraphQL */ `mutation UpdateClientAccount(
  $condition: ModelClientAccountConditionInput
  $input: UpdateClientAccountInput!
) {
  updateClientAccount(condition: $condition, input: $input) {
    address1
    address2
    annualEventCount
    averageEventAttendance
    city
    clientAccountId
    companyName
    country
    createdAt
    createdBy
    currencyCode
    disabled
    events {
      nextToken
      __typename
    }
    industry
    licenseKey
    licenseKeyValidUntil
    readGroups
    state
    updatedAt
    updatedBy
    users {
      nextToken
      __typename
    }
    writeGroups
    zip
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClientAccountMutationVariables,
  APITypes.UpdateClientAccountMutation
>;
export const updateErrorLog = /* GraphQL */ `mutation UpdateErrorLog(
  $condition: ModelErrorLogConditionInput
  $input: UpdateErrorLogInput!
) {
  updateErrorLog(condition: $condition, input: $input) {
    awsRequestId
    campaignId
    clientAccountId
    createdAt
    createdBy
    disabled
    errorLogId
    errorMessage
    functionName
    metadata
    readGroups
    stack
    updatedAt
    updatedBy
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateErrorLogMutationVariables,
  APITypes.UpdateErrorLogMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $condition: ModelEventConditionInput
  $input: UpdateEventInput!
) {
  updateEvent(condition: $condition, input: $input) {
    campaigns {
      nextToken
      __typename
    }
    clientAccount {
      address1
      address2
      annualEventCount
      averageEventAttendance
      city
      clientAccountId
      companyName
      country
      createdAt
      createdBy
      currencyCode
      disabled
      industry
      licenseKey
      licenseKeyValidUntil
      readGroups
      state
      updatedAt
      updatedBy
      writeGroups
      zip
      __typename
    }
    clientAccountId
    closingDate
    createdAt
    createdBy
    description
    disabled
    eventId
    location
    logoImageUrl
    name
    openingDate
    readGroups
    updatedAt
    updatedBy
    websiteUrl
    writeGroups
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    clientAccount {
      address1
      address2
      annualEventCount
      averageEventAttendance
      city
      clientAccountId
      companyName
      country
      createdAt
      createdBy
      currencyCode
      disabled
      industry
      licenseKey
      licenseKeyValidUntil
      readGroups
      state
      updatedAt
      updatedBy
      writeGroups
      zip
      __typename
    }
    clientAccountId
    createdAt
    createdBy
    disabled
    email
    familyName
    givenName
    jobTitle
    mobilePhone
    mobilePhoneCountryCode
    owner
    updatedAt
    updatedBy
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
