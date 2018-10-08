const axios = require('axios');
const categorizeFunction = require('./categorizeFunction').categorizeFunction;
const updateMarketCapIntoDynamo = require('../dynamoDB/updateMarketCapIntoDynamo').updateMarketCapIntoDynamo;

const fetchUniverse = require('./fetchUniverse').fetchUniverse;

const fetchIndividualMarketCap = (symbol) => {
  let api = 'https://api.iextrading.com/1.0/stock/' + symbol + '/stats';
  return axios.get(api)
    .then(response => {
      let marketcap = response.data.marketcap ;
      return {
        symbol: symbol,
        marketcap: marketcap,
        cap: categorizeFunction(marketcap)
      };
    })
    .catch(error => console.log(error));
};
/*
//5445
fetchUniverse().then(d=>d.slice(5001,5445).forEach(_d=>{
  fetchIndividualMarketCap(_d.symbol)
    .then(payload => updateMarketCapIntoDynamo(payload, 'iex-stock-universe') )
    .catch(error => console.log(error));
}))
*/

let symbol = process.argv[2];
fetchIndividualMarketCap(symbol)
  .then(payload => updateMarketCapIntoDynamo(payload, 'iex-stock-universe') )
  .catch(error => console.log(error));
