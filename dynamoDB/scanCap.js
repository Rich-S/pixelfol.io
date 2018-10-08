const dynamo = require('../src/Config.js').sdkPack.dynamo;

function scanCap(capSize, callback) {
  let params = {
      TableName: "iex-stock-universe",
      FilterExpression: "cap = :cap",
      ExpressionAttributeValues: {
          ":cap": capSize
      }
  };
  dynamo.scan(params, callback)
}

exports.scanCap = scanCap;
