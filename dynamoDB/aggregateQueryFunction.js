const dynamo = require('../src/Config.js').sdkPack.dynamo;
const db = require('../src/Config.js').sdkPack.db;

var _params = {
  TableName: "iex-transactions-stream",
  KeyConditionExpression: "#symbol = :symbol",
  ExpressionAttributeNames:{
    "#symbol": "symbol"
  },
  ExpressionAttributeValues: {
    ":symbol": 'ABBV'
  }
};
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html
dynamo.query(_params, (e, d)=>console.log(d));
