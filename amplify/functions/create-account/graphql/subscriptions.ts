/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCampaign = /* GraphQL */ `subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onCreateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignSubscriptionVariables,
  APITypes.OnCreateCampaignSubscription
>;
export const onCreateClientAccount = /* GraphQL */ `subscription OnCreateClientAccount(
  $filter: ModelSubscriptionClientAccountFilterInput
) {
  onCreateClientAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClientAccountSubscriptionVariables,
  APITypes.OnCreateClientAccountSubscription
>;
export const onCreateErrorLog = /* GraphQL */ `subscription OnCreateErrorLog($filter: ModelSubscriptionErrorLogFilterInput) {
  onCreateErrorLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateErrorLogSubscriptionVariables,
  APITypes.OnCreateErrorLogSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteCampaign = /* GraphQL */ `subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onDeleteCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignSubscriptionVariables,
  APITypes.OnDeleteCampaignSubscription
>;
export const onDeleteClientAccount = /* GraphQL */ `subscription OnDeleteClientAccount(
  $filter: ModelSubscriptionClientAccountFilterInput
) {
  onDeleteClientAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClientAccountSubscriptionVariables,
  APITypes.OnDeleteClientAccountSubscription
>;
export const onDeleteErrorLog = /* GraphQL */ `subscription OnDeleteErrorLog($filter: ModelSubscriptionErrorLogFilterInput) {
  onDeleteErrorLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteErrorLogSubscriptionVariables,
  APITypes.OnDeleteErrorLogSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateCampaign = /* GraphQL */ `subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onUpdateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignSubscriptionVariables,
  APITypes.OnUpdateCampaignSubscription
>;
export const onUpdateClientAccount = /* GraphQL */ `subscription OnUpdateClientAccount(
  $filter: ModelSubscriptionClientAccountFilterInput
) {
  onUpdateClientAccount(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClientAccountSubscriptionVariables,
  APITypes.OnUpdateClientAccountSubscription
>;
export const onUpdateErrorLog = /* GraphQL */ `subscription OnUpdateErrorLog($filter: ModelSubscriptionErrorLogFilterInput) {
  onUpdateErrorLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateErrorLogSubscriptionVariables,
  APITypes.OnUpdateErrorLogSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
