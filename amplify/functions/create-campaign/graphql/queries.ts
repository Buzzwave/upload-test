/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAcquisition = /* GraphQL */ `query GetAcquisition($acquisitionId: ID!) {
  getAcquisition(acquisitionId: $acquisitionId) {
    acquisitionId
    campaignId
    campaignPost {
      campaignId
      campaignPostId
      clientAccountId
      country
      createdAt
      createdBy
      disabled
      email
      emailVerified
      familyName
      givenName
      language
      linkedInPostId
      name
      pictureUrl
      postType
      postTypeEnum
      readGroups
      sub
      updatedAt
      updatedBy
      writeGroups
      __typename
    }
    createdAt
    createdBy
    disabled
    readGroups
    updatedAt
    updatedBy
    viewedCampaignPostId
    writeGroups
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAcquisitionQueryVariables,
  APITypes.GetAcquisitionQuery
>;
export const getCampaign = /* GraphQL */ `query GetCampaign($campaignId: ID!) {
  getCampaign(campaignId: $campaignId) {
    campaignId
    campaignPostClicks {
      nextToken
      __typename
    }
    campaignPostStates {
      nextToken
      __typename
    }
    campaignPosts {
      nextToken
      __typename
    }
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
export const getCampaignPost = /* GraphQL */ `query GetCampaignPost($campaignPostId: ID!) {
  getCampaignPost(campaignPostId: $campaignPostId) {
    acquisitions {
      nextToken
      __typename
    }
    campaign {
      campaignId
      clientAccountId
      confirmationPageUrl
      createdAt
      createdBy
      description
      disabled
      eventId
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
    campaignId
    campaignPostClicks {
      nextToken
      __typename
    }
    campaignPostId
    clientAccountId
    country
    createdAt
    createdBy
    disabled
    email
    emailVerified
    familyName
    givenName
    language
    linkedInPostId
    name
    pictureUrl
    postType
    postTypeEnum
    readGroups
    sub
    updatedAt
    updatedBy
    writeGroups
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignPostQueryVariables,
  APITypes.GetCampaignPostQuery
>;
export const getCampaignPostClick = /* GraphQL */ `query GetCampaignPostClick($campaignPostClickId: ID!) {
  getCampaignPostClick(campaignPostClickId: $campaignPostClickId) {
    campaign {
      campaignId
      clientAccountId
      confirmationPageUrl
      createdAt
      createdBy
      description
      disabled
      eventId
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
    campaignId
    campaignPost {
      campaignId
      campaignPostId
      clientAccountId
      country
      createdAt
      createdBy
      disabled
      email
      emailVerified
      familyName
      givenName
      language
      linkedInPostId
      name
      pictureUrl
      postType
      postTypeEnum
      readGroups
      sub
      updatedAt
      updatedBy
      writeGroups
      __typename
    }
    campaignPostClickId
    campaignPostId
    createdAt
    createdBy
    disabled
    postForwardUrl
    readGroups
    updatedAt
    updatedBy
    writeGroups
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignPostClickQueryVariables,
  APITypes.GetCampaignPostClickQuery
>;
export const getCampaignPostState = /* GraphQL */ `query GetCampaignPostState($campaignPostStateId: ID!) {
  getCampaignPostState(campaignPostStateId: $campaignPostStateId) {
    campaign {
      campaignId
      clientAccountId
      confirmationPageUrl
      createdAt
      createdBy
      description
      disabled
      eventId
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
    campaignId
    campaignPostStateId
    createdAt
    createdBy
    disabled
    state
    updatedAt
    updatedBy
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignPostStateQueryVariables,
  APITypes.GetCampaignPostStateQuery
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
    pixelInstallationTrackings {
      nextToken
      __typename
    }
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
export const getPixelInstallationTracking = /* GraphQL */ `query GetPixelInstallationTracking($pixelInstallationTrackingId: ID!) {
  getPixelInstallationTracking(
    pixelInstallationTrackingId: $pixelInstallationTrackingId
  ) {
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
    domain
    pixelInstallationTrackingId
    readGroups
    updatedAt
    updatedBy
    writeGroups
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPixelInstallationTrackingQueryVariables,
  APITypes.GetPixelInstallationTrackingQuery
>;
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
export const listAcquisitions = /* GraphQL */ `query ListAcquisitions(
  $acquisitionId: ID
  $filter: ModelAcquisitionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAcquisitions(
    acquisitionId: $acquisitionId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      acquisitionId
      campaignId
      createdAt
      createdBy
      disabled
      readGroups
      updatedAt
      updatedBy
      viewedCampaignPostId
      writeGroups
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAcquisitionsQueryVariables,
  APITypes.ListAcquisitionsQuery
>;
export const listCampaignPostClicks = /* GraphQL */ `query ListCampaignPostClicks(
  $campaignPostClickId: ID
  $filter: ModelCampaignPostClickFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCampaignPostClicks(
    campaignPostClickId: $campaignPostClickId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      campaignId
      campaignPostClickId
      campaignPostId
      createdAt
      createdBy
      disabled
      postForwardUrl
      readGroups
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
  APITypes.ListCampaignPostClicksQueryVariables,
  APITypes.ListCampaignPostClicksQuery
>;
export const listCampaignPostStates = /* GraphQL */ `query ListCampaignPostStates(
  $campaignPostStateId: ID
  $filter: ModelCampaignPostStateFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCampaignPostStates(
    campaignPostStateId: $campaignPostStateId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      campaignId
      campaignPostStateId
      createdAt
      createdBy
      disabled
      state
      updatedAt
      updatedBy
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignPostStatesQueryVariables,
  APITypes.ListCampaignPostStatesQuery
>;
export const listCampaignPosts = /* GraphQL */ `query ListCampaignPosts(
  $campaignPostId: ID
  $filter: ModelCampaignPostFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCampaignPosts(
    campaignPostId: $campaignPostId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      campaignId
      campaignPostId
      clientAccountId
      country
      createdAt
      createdBy
      disabled
      email
      emailVerified
      familyName
      givenName
      language
      linkedInPostId
      name
      pictureUrl
      postType
      postTypeEnum
      readGroups
      sub
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
  APITypes.ListCampaignPostsQueryVariables,
  APITypes.ListCampaignPostsQuery
>;
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
      clientAccountId
      confirmationPageUrl
      createdAt
      createdBy
      description
      disabled
      eventId
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
export const listPixelInstallationTrackings = /* GraphQL */ `query ListPixelInstallationTrackings(
  $filter: ModelPixelInstallationTrackingFilterInput
  $limit: Int
  $nextToken: String
  $pixelInstallationTrackingId: ID
  $sortDirection: ModelSortDirection
) {
  listPixelInstallationTrackings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    pixelInstallationTrackingId: $pixelInstallationTrackingId
    sortDirection: $sortDirection
  ) {
    items {
      clientAccountId
      createdAt
      createdBy
      disabled
      domain
      pixelInstallationTrackingId
      readGroups
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
  APITypes.ListPixelInstallationTrackingsQueryVariables,
  APITypes.ListPixelInstallationTrackingsQuery
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
