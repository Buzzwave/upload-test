import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { createAccount } from '../functions/create-account/resource';
import { createCampaign } from '../functions/create-campaign/resource';
import { createEvent } from '../functions/create-event/resource';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  User: a
    .model({
      // Primary Key
      userId: a.id().required(),

      // Attributes
      email: a.string().required(),
      givenName: a.string().required(),
      familyName: a.string().required(),
      jobTitle: a.string().required(),
      mobilePhoneCountryCode: a.string().required(),
      mobilePhone: a.string().required(),
      owner: a.string().required(),

      // Foreign Keys
      clientAccountId: a.id().required(),
    
      // Relationships
      clientAccount: a.belongsTo('ClientAccount', 'clientAccountId'), // 1:1 relationship

      // Audit  
      createdBy: a.string().required(),
      updatedBy: a.string().required(),
      disabled: a.boolean().default(false),
    })
    .identifier(['userId'])
    .authorization(allow => [allow.ownerDefinedIn('owner')]),
  ClientAccount: a
    .model({
      // Primary Key
      clientAccountId: a.id().required(),

      // Attributes
      companyName: a.string().required(),
      industry: a.string().required(),
      address1: a.string(),
      address2: a.string(),
      city: a.string(),
      state: a.string(),
      zip: a.string(),
      country: a.string(),
      currencyCode: a.string().required(), // used to display $ or £ or € etc.
      annualEventCount: a.string().required(),
      averageEventAttendance: a.string().required(),
      licenseKey: a.string(),
      licenseKeyValidUntil: a.date(),

      // Relationships
      events: a.hasMany("Event", "clientAccountId"), // 1:M relationship
      users: a.hasMany("User", "clientAccountId"), // 1:M relationship

      // Permission groups
      readGroups: a.string().array(),
      writeGroups: a.string().array(),

      // Audit  
      createdBy: a.string().required(),
      updatedBy: a.string().required(),
      disabled: a.boolean().default(false),
    })
    .identifier(['clientAccountId'])
    .authorization(allow => [
      allow.groupsDefinedIn('readGroups').to(['read']),
      allow.groupsDefinedIn('writeGroups'),
      allow.authenticated().to(['create'])
    ]),
  Event: a
    .model({
      // Primary Key
      eventId: a.id().required(),

      // Attributes
      name: a.string().required(),
      description: a.string(),
      logoImageUrl: a.string().required(),
      websiteUrl: a.url(),
      openingDate: a.datetime().required(),
      closingDate: a.datetime().required(),
      location: a.string(),

      // Foreign Keys
      clientAccountId: a.id().required(),

      // Relationships
      clientAccount: a.belongsTo('ClientAccount', 'clientAccountId'), // 1:1 relationship
      campaigns: a.hasMany("Campaign", "eventId"), // 1:M relationship

      // Permission groups
      readGroups: a.string().array(),
      writeGroups: a.string().array(),

      // Audit   
      createdBy: a.string().required(),
      updatedBy: a.string().required(),
      disabled: a.boolean().default(false),
    })
    .identifier(['eventId'])
    .authorization(allow => [
      allow.groupsDefinedIn('readGroups').to(['read']),
      allow.groupsDefinedIn('writeGroups'),
      allow.authenticated().to(['create'])
    ]),
  Campaign: a
    .model({
      // Primary Key
      campaignId: a.id().required(),

      // Attributes
      name: a.string(),
      description: a.string(),
      registrationPageUrl: a.url(),
      confirmationPageUrl: a.url(),
      targetInfluencerTypeEnum: a.enum(['Any', 'Attendee', 'Speaker', 'Exhibitor', 'Sponsor', 'Other']),
      valueOfPost: a.float(),
      valueOfClick: a.float(),
      valueOfAcquisition: a.float(),
      campaignStatus: a.enum(['Draft', 'Active', 'Inactive', 'Completed', 'Deleted']),

      // Modal activator template
      modalTitle: a.string(),
      modalText: a.string(),
      modalButtonText: a.string(),
      modalIncentiveText: a.string(),
      modalIncentiveTCs: a.string(),
      modalPattern: a.string(),
      modalDomainPath: a.string(),
      modalPatternLocationEnum: a.enum(['Endswith', 'Contains', 'Equals', 'Regex']),

      // Social post template
      postText: a.string(),
      postImageUrl: a.url(),
      postForwardUrl: a.url(),

      // Foreign Keys
      eventId: a.id().required(),
      clientAccountId: a.id().required(),

      // Relationships
      event: a.belongsTo('Event', 'eventId'), // 1:1 relationship

      // Permission groups
      readGroups: a.string().array(),
      writeGroups: a.string().array(),

      // Audit  
      createdBy: a.string().required(),
      updatedBy: a.string().required(),
      disabled: a.boolean().default(false),
    })
    .identifier(['campaignId'])
    .authorization(allow => [
      allow.groupsDefinedIn('readGroups').to(['read']),
      allow.groupsDefinedIn('writeGroups'),
      allow.authenticated().to(['create'])
    ]),
  ErrorLog: a
    .model({
      // Primary Key
      errorLogId: a.string().required(),

      awsRequestId: a.string(),
      functionName: a.string(),
      errorMessage: a.string(),
      stack: a.string(),
      clientAccountId: a.string(),
      campaignId: a.string(),
      metadata: a.string(),

      // Permission groups
      readGroups: a.string().array(),
      writeGroups: a.string().array(),

      // Audit  
      createdBy: a.string().required(),
      updatedBy: a.string().required(),
      disabled: a.boolean().default(false),
    })
    .identifier(['errorLogId'])
    .authorization((allow) => [allow.authenticated().to(['create'])]),
  CreateAccount: a
    .mutation()
    .arguments({
      companyName: a.string().required(),
      industry: a.string().required(),
      annualEventCount: a.string().required(),
      averageEventAttendance: a.string().required(),
      currencyCode: a.string().required(),
      userId: a.string().required(),
      givenName: a.string().required(),
      familyName: a.string().required(),
      jobTitle: a.string().required(),
      email: a.string().required(),
      mobilePhoneCountryCode: a.string().required(),
      mobilePhone: a.string().required(),
      debugLogging: a.boolean(),
    })
    .handler(a.handler.function(createAccount))
    .returns(a.json().required())
    .authorization(allow => [allow.authenticated()])
})
.authorization(allow => [
  allow.resource(createAccount),
  allow.resource(createCampaign),
  allow.resource(createEvent)
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    // defaultAuthorizationMode: 'iam',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
