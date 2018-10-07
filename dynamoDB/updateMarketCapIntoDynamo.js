const db = require('../src/Config.js').sdkPack.db;

const tableName = "iex-stock-universe";

function updateMarketCapIntoDynamo(payload, tableName) {
  let symbol = payload.symbol,
    cap = payload.cap,
    marketcap = String(payload.marketcap);
  let params = {
    TableName: tableName,
    Key: {
      symbol: { "S": symbol }
    },
    UpdateExpression: "SET marketcap = :marketcap, cap = :cap",
    ExpressionAttributeValues: {
      ":marketcap"  : { "N" : marketcap },
      ":cap"  : { "S" : cap }
    },
    ReturnValues:"UPDATED_NEW"
  };
  db.updateItem(params,(err,d) => err ? console.log(err) : console.log(d));
}

exports.updateMarketCapIntoDynamo = updateMarketCapIntoDynamo;
