// Load & update the AWS SDK
var AWS = require('aws-sdk'),
    region = "us-east-1",
    secretName = "big-easy",
    secret,
    decodedBinarySecret;

AWS.config.update({ region });

exports.sdkPack = {
  aws: AWS,
  secretName: secretName,
  client: new AWS.SecretsManager({ region }),
  kinesis: new AWS.Kinesis(),
  dynamo: new AWS.DynamoDB.DocumentClient(),
  db: new AWS.DynamoDB()
};
