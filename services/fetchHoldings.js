const fundHoldings = require('../assets/fundHoldings.json');
const dynamo = require('../src/Config.js').sdkPack.dynamo;


var params = {
  TableName: "stock-universe",
  Key: {
    //  If there is a secondary key, it needs to be specified
    "symbol": "NLY-G"
  }
};

dynamo.get(params, function(err, data) { if (err) { console.log(err) } else { console.log(data) } })
