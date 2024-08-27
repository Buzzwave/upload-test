/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAcquisition = /* GraphQL */ `subscription OnCreateAcquisition(
  $filter: ModelSubscriptionAcquisitionFilterInput
) {
  onCreateAcquisition(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAcquisitionSubscriptionVariables,
  APITypes.OnCreateAcquisitionSubscription
>;
export const onCreateCampaign = /* GraphQL */ `subscription OnCreateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onCreateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignSubscriptionVariables,
  APITypes.OnCreateCampaignSubscription
>;
export const onCreateCampaignPost = /* GraphQL */ `subscription OnCreateCampaignPost(
  $filter: ModelSubscriptionCampaignPostFilterInput
) {
  onCreateCampaignPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignPostSubscriptionVariables,
  APITypes.OnCreateCampaignPostSubscription
>;
export const onCreateCampaignPostClick = /* GraphQL */ `subscription OnCreateCampaignPostClick(
  $filter: ModelSubscriptionCampaignPostClickFilterInput
) {
  onCreateCampaignPostClick(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignPostClickSubscriptionVariables,
  APITypes.OnCreateCampaignPostClickSubscription
>;
export const onCreateCampaignPostState = /* GraphQL */ `subscription OnCreateCampaignPostState(
  $filter: ModelSubscriptionCampaignPostStateFilterInput
) {
  onCreateCampaignPostState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignPostStateSubscriptionVariables,
  APITypes.OnCreateCampaignPostStateSubscription
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
export const onCreatePixelInstallationTracking = /* GraphQL */ `subscription OnCreatePixelInstallationTracking(
  $filter: ModelSubscriptionPixelInstallationTrackingFilterInput
) {
  onCreatePixelInstallationTracking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePixelInstallationTrackingSubscriptionVariables,
  APITypes.OnCreatePixelInstallationTrackingSubscription
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
export const onDeleteAcquisition = /* GraphQL */ `subscription OnDeleteAcquisition(
  $filter: ModelSubscriptionAcquisitionFilterInput
) {
  onDeleteAcquisition(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAcquisitionSubscriptionVariables,
  APITypes.OnDeleteAcquisitionSubscription
>;
export const onDeleteCampaign = /* GraphQL */ `subscription OnDeleteCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onDeleteCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignSubscriptionVariables,
  APITypes.OnDeleteCampaignSubscription
>;
export const onDeleteCampaignPost = /* GraphQL */ `subscription OnDeleteCampaignPost(
  $filter: ModelSubscriptionCampaignPostFilterInput
) {
  onDeleteCampaignPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignPostSubscriptionVariables,
  APITypes.OnDeleteCampaignPostSubscription
>;
export const onDeleteCampaignPostClick = /* GraphQL */ `subscription OnDeleteCampaignPostClick(
  $filter: ModelSubscriptionCampaignPostClickFilterInput
) {
  onDeleteCampaignPostClick(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignPostClickSubscriptionVariables,
  APITypes.OnDeleteCampaignPostClickSubscription
>;
export const onDeleteCampaignPostState = /* GraphQL */ `subscription OnDeleteCampaignPostState(
  $filter: ModelSubscriptionCampaignPostStateFilterInput
) {
  onDeleteCampaignPostState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignPostStateSubscriptionVariables,
  APITypes.OnDeleteCampaignPostStateSubscription
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
export const onDeletePixelInstallationTracking = /* GraphQL */ `subscription OnDeletePixelInstallationTracking(
  $filter: ModelSubscriptionPixelInstallationTrackingFilterInput
) {
  onDeletePixelInstallationTracking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePixelInstallationTrackingSubscriptionVariables,
  APITypes.OnDeletePixelInstallationTrackingSubscription
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
export const onUpdateAcquisition = /* GraphQL */ `subscription OnUpdateAcquisition(
  $filter: ModelSubscriptionAcquisitionFilterInput
) {
  onUpdateAcquisition(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAcquisitionSubscriptionVariables,
  APITypes.OnUpdateAcquisitionSubscription
>;
export const onUpdateCampaign = /* GraphQL */ `subscription OnUpdateCampaign($filter: ModelSubscriptionCampaignFilterInput) {
  onUpdateCampaign(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignSubscriptionVariables,
  APITypes.OnUpdateCampaignSubscription
>;
export const onUpdateCampaignPost = /* GraphQL */ `subscription OnUpdateCampaignPost(
  $filter: ModelSubscriptionCampaignPostFilterInput
) {
  onUpdateCampaignPost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignPostSubscriptionVariables,
  APITypes.OnUpdateCampaignPostSubscription
>;
export const onUpdateCampaignPostClick = /* GraphQL */ `subscription OnUpdateCampaignPostClick(
  $filter: ModelSubscriptionCampaignPostClickFilterInput
) {
  onUpdateCampaignPostClick(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignPostClickSubscriptionVariables,
  APITypes.OnUpdateCampaignPostClickSubscription
>;
export const onUpdateCampaignPostState = /* GraphQL */ `subscription OnUpdateCampaignPostState(
  $filter: ModelSubscriptionCampaignPostStateFilterInput
) {
  onUpdateCampaignPostState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignPostStateSubscriptionVariables,
  APITypes.OnUpdateCampaignPostStateSubscription
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
export const onUpdatePixelInstallationTracking = /* GraphQL */ `subscription OnUpdatePixelInstallationTracking(
  $filter: ModelSubscriptionPixelInstallationTrackingFilterInput
) {
  onUpdatePixelInstallationTracking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePixelInstallationTrackingSubscriptionVariables,
  APITypes.OnUpdatePixelInstallationTrackingSubscription
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
