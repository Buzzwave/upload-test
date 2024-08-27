import { defineFunction } from "@aws-amplify/backend";

export const createEvent = defineFunction({
  name: "createEvent",
  entry: './handler.ts'
});