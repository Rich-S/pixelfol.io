const db = require('../src/Config.js').sdkPack.db;

const tableName = "iex-stock-universe";
const symbol = 'AEYE';

var params = {
  TableName: tableName,
  Key: {
    symbol: { "S": symbol }
  },
  UpdateExpression: "ADD trades :trades, bidSize :bidSize, askSize :askSize",
  ExpressionAttributeValues: {
    ":trades"   : { "N" : "1" },
    ":bidSize"  : { "N" : "1" },
    ":askSize"  : { "N" : "1" }
  },
  ReturnValues:"UPDATED_NEW"
};

db.updateItem(params,(err,d) => err ? console.log(err) : console.log(d));




/*

params structure for getting an item based on key
var params = {
  TableName: tableName,
  KeyConditionExpression: "#symbol = :symbol",
  ExpressionAttributeNames:{
    "#symbol": "symbol"
  },
  ExpressionAttributeValues: {
    ":symbol": 'ABBV'
  }
};
dynamo.query(params,callback)


params structure for setting new key
var params = {
  TableName: tableName,
  Key: {
    symbol: symbol
  },
  UpdateExpression: "set trades = :trades",
    ExpressionAttributeValues: {
      ":trades": 2
    },
    ReturnValues:"UPDATED_NEW"
};
dynamo.update(params,callback)


params structure for setting multiple keys/attributes
var params = {
  TableName: tableName,
  Key: {
    symbol: { "S": symbol }
  },
  UpdateExpression: "ADD trades :trades",
  ExpressionAttributeValues: {
    ":trades" : { "N" : "1" }
  },
  ReturnValues:"UPDATED_NEW"
};
db.updateItem(params,callback)

sources: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html
*/
