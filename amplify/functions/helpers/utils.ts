import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../data/resource';

const client = generateClient<Schema>();

// Handles errors during Query execution. Use recommendations in error messages below to 
// add error handling specific to your application use-case. 
export function getQueryErrorMessage(err: any) {
	if (!err) {
	  return 'Encountered error object was empty';
	}
	if (!err.code) {
	  return `An exception occurred, investigate and configure retry strategy. Error: ${JSON.stringify(err)}`;
	}
	// there are no API specific errors to handle for Query, common DynamoDB API errors are handled below
	switch (err.code) {
		case 'InternalServerError':
			return `Internal Server Error, generally safe to retry with exponential back-off. Error: ${err.message}`;
		case 'ProvisionedThroughputExceededException':
			return `Request rate is too high. If you're using a custom retry strategy make sure to retry with exponential back-off. ` +
				`Otherwise consider reducing frequency of requests or increasing provisioned capacity for your table or secondary index. Error: ${err.message}`;
		case 'ResourceNotFoundException':
			return `One of the tables was not found, verify table exists before retrying. Error: ${err.message}`;
		case 'ServiceUnavailable':
			return `Had trouble reaching DynamoDB. generally safe to retry with exponential back-off. Error: ${err.message}`;
		case 'ThrottlingException':
			return `Request denied due to throttling, generally safe to retry with exponential back-off. Error: ${err.message}`;
		case 'UnrecognizedClientException':
			return `The request signature is incorrect most likely due to an invalid AWS access key ID or secret key, fix before retrying. ` +
				`Error: ${err.message}`;
		case 'ValidationException':
			return `The input fails to satisfy the constraints specified by DynamoDB, ` +
				`fix input before retrying. Error: ${err.message}`;
		case 'RequestLimitExceeded':
			return `Throughput exceeds the current throughput limit for your account, ` +
				`increase account level throughput before retrying. Error: ${err.message}`;
		default:
			return `An exception occurred, investigate and configure retry strategy. Error: ${err.message}`;
	}
 }

 export function addToDebugLog(logLevel: any, logMessage: any, log: string[], debugLogging: boolean) {
	if (debugLogging === true) {
		switch (logLevel) {
			case 'INFO':
				console.info(logMessage);
				break;
			case 'WARN':
				console.warn(logMessage);
				break;
			case 'ERROR':
				console.error(logMessage);
				break;
		}
	}
	const logEntry = `${new Date().toISOString()} [${logLevel}] ${logMessage}`;
	log.push(logEntry);

	return log;
 }

 export async function writeToErrorLog(functionName: any, clientAccountId: any, campaignId: any, errorMessage: any, awsRequestId: any, nowUtc: any, stack: any, metadata: any) {
	const newErrorLog = {
		errorLogId: awsRequestId,
		awsRequestId: awsRequestId,
		functionName: functionName,
		errorMessage: errorMessage,
		stack: stack,
		clientAccountId: clientAccountId,
		campaignId: campaignId,
		metadata: metadata,
		updateDate: nowUtc,
		createDate: nowUtc,
		updatedBy: 'Utils',
		createdBy: 'Utils',
	};

	try {
		console.error(newErrorLog);
		const { data, errors: clientAccountCreateErrors } = await client.models.ErrorLog.create(newErrorLog);
		if (clientAccountCreateErrors) {
			clientAccountCreateErrors.forEach((error: any) => {
				throw error;
			});
		}
	}
	catch (err) {
		console.error(getQueryErrorMessage(err));
	}
 }
