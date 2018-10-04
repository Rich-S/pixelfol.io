const universe = require('./universe.js').universe();

let template = {
  symbol: null,
  name: null,
  sector: null,
  bidSize: null,
  yield: null,
  askSize: null,
  lastSalePrice: null,
  volume: null,
  marketPercent: null,
  funds: null
};

universe.then( array => {
  array.map( obj => {
    ["symbol", "name"].forEach(k => {
      template[k] = obj[k]
      console.log(template)
    })
  });
});

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
