const db = require('../src/Config.js').sdkPack.db;

const tableName = "iex-stock-universe";

function updateIntoDynamo(payload, tableName) {
  let symbol = payload.symbol,
    bidSize = String(payload.bidSize),
    askSize = String(payload.askSize),
    volume = String(payload.volume),
    sector = String(payload.sector),
    lastSalePrice = String(payload.lastSalePrice);
  let params = {
    TableName: tableName,
    Key: {
      symbol: { "S": symbol }
    },
    UpdateExpression: "ADD trades :trades, bidSize :bidSize, askSize :askSize, volume :volume, lastSalePrice :lastSalePrice",
    ExpressionAttributeValues: {
      ":trades"   : { "N" : "1" },
      ":bidSize"  : { "N" : bidSize },
      ":askSize"  : { "N" : askSize },
      ":volume"   : { "N" : volume },

      ":lastSalePrice"  : { "N" : lastSalePrice },
    },
    ReturnValues:"UPDATED_NEW"
  };
  db.updateItem(params,(err,d) => err ? console.log(err) : console.log(d));
}

exports.updateIntoDynamo = updateIntoDynamo;
