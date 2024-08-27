/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCampaign = /* GraphQL */ `query GetCampaign($campaignId: ID!) {
  getCampaign(campaignId: $campaignId) {
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
` as GeneratedQuery<
  APITypes.GetCampaignQueryVariables,
  APITypes.GetCampaignQuery
>;
export const getClientAccount = /* GraphQL */ `query GetClientAccount($clientAccountId: ID!) {
  getClientAccount(clientAccountId: $clientAccountId) {
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
` as GeneratedQuery<
  APITypes.GetClientAccountQueryVariables,
  APITypes.GetClientAccountQuery
>;
export const getErrorLog = /* GraphQL */ `query GetErrorLog($errorLogId: String!) {
  getErrorLog(errorLogId: $errorLogId) {
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
` as GeneratedQuery<
  APITypes.GetErrorLogQueryVariables,
  APITypes.GetErrorLogQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($eventId: ID!) {
  getEvent(eventId: $eventId) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const getUser = /* GraphQL */ `query GetUser($userId: ID!) {
  getUser(userId: $userId) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listCampaigns = /* GraphQL */ `query ListCampaigns(
  $campaignId: ID
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCampaigns(
    campaignId: $campaignId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      campaignId
      campaignStatus
      clientAccountId
      confirmationPageUrl
      createdAt
      createdBy
      description
      disabled
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignsQueryVariables,
  APITypes.ListCampaignsQuery
>;
export const listClientAccounts = /* GraphQL */ `query ListClientAccounts(
  $clientAccountId: ID
  $filter: ModelClientAccountFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listClientAccounts(
    clientAccountId: $clientAccountId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientAccountsQueryVariables,
  APITypes.ListClientAccountsQuery
>;
export const listErrorLogs = /* GraphQL */ `query ListErrorLogs(
  $errorLogId: String
  $filter: ModelErrorLogFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listErrorLogs(
    errorLogId: $errorLogId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListErrorLogsQueryVariables,
  APITypes.ListErrorLogsQuery
>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $eventId: ID
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEvents(
    eventId: $eventId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID
) {
  listUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
