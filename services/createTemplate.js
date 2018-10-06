const fetchUniverse = require('./fetchUniverse.js').fetchUniverse;

const createTemplate = () => {
  //let objectKeys = ["name", "sector", "bidSize", "askSize", "yield", "lastSalePrice", "volume", "marketPercent", "funds"];
  return fetchUniverse()
    .then( array => {
      return array.map( obj => {
        let template = {};
        return {
          Item: {
            symbol: obj["symbol"],
            name: obj["name"],
            sector: 'n/a',
            bidSize: 0,
            askSize: 0,
            yield: 0,
            lastSalePrice: 0,
            volume: 0,
            marketPercent: 0,
            funds: []
          }
        };
      });
    });
}

exports.createTemplate = createTemplate;
/*
{
  symbol: "STOCK",
  sector: "Technology",
  bidSize: 100,
  yield: .018,
  askSize: 80000,
  lastSalePrice: 41.0000,
  volume: 600,
  marketPercent: 0.00268,
  funds: ["Fund A", "Fund B", "Fund C", "Fund D", "Fund E"]
}
*/
