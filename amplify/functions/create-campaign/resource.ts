import { defineFunction } from "@aws-amplify/backend";

export const createCampaign = defineFunction({
  name: "createCampaign",
  entry: './handler.ts'
});