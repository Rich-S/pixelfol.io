const dynamo = require('../src/Config.js').sdkPack.dynamo;

function writeIntoDynamo(payload, tableName) {
  let params = Object.assign(payload, { TableName: tableName });
  dynamo.put(payload, function(err,data){ if (err) { console.log(err) } else { console.log(data)}});
}

exports.writeIntoDynamo = writeIntoDynamo;
//const documentClient = new aws.DynamoDB.DocumentClient();
