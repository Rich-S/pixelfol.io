const fundHoldings = require('../assets/fundHoldings.json');

function createHoldingsTemplate() {
  const promiseHoldings = new Promise(function(resolve, reject) {
    resolve(fundHoldings);
  });
  return promiseHoldings.then( holdings => {
    return Object.keys(holdings).map(key => {
      return {
        Item: {
          symbol: key,
          holdings: holdings[key]
        }
      }
    })
  })
}

exports.createHoldingsTemplate = createHoldingsTemplate;
