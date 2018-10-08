const AWS = require('aws-sdk');

const creds = {
  accessKeyId: process.env.REACT_APP_ACCESSKEYID,
  secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY,
  region: process.env.REACT_APP_REGION
};

AWS.config.update(creds);

const dynamo = new AWS.DynamoDB.DocumentClient();

function fetchByCapSize(capSize, callback) {
  let params = {
      TableName: "iex-stock-universe",
      FilterExpression: "cap = :cap",
      ExpressionAttributeValues: {
          ":cap": capSize
      }
  };
  dynamo.scan(params, callback)
}

export default fetchByCapSize;
