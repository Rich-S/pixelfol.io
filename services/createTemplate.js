const fetchUniverse = require('./fetchUniverse.js').fetchUniverse;

const createTemplate = () => {
  let objectKeys = ["symbol", "name", "sector", "bidSize", "askSize", "yield", "lastSalePrice", "volume", "marketPercent", "funds"];
  return fetchUniverse()
    .then( array => {
      return array.map( obj => {
        let template = {};
        objectKeys.forEach(key => template[key] = obj[key]);
        return { Item: { id: parseInt(obj["iexId"]), Record: template } }
      });
    });
};

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
