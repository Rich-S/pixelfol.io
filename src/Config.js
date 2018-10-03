// Load & update the AWS SDK
const AWS = require('aws-sdk'),
    region = "us-east-1",
    secretName = "big-easy",
    secret,
    decodedBinarySecret;

AWS.config.update({region});

// Create a Secrets Manager client
const client = new AWS.SecretsManager({
    region: region
});
