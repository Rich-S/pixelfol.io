const createTemplate = require('./services/createTemplate.js').createTemplate;
const createHoldingsTemplate = require('./services/createHoldingsTemplate.js').createHoldingsTemplate;
const writeIntoDynamo = require('./dynamoDB/writeIntoDynamo.js').writeIntoDynamo;

const tableNameA = 'iex-stock-universe';
const tableNameB = 'fund-universe';


//  every morning a new data batch populated into the persistance layer
createTemplate()
  .then(d => console.log(d.length))
  //.then( allListedStocks => allListedStocks.forEach( securityPayload => writeIntoDynamo(securityPayload, tableNameA)))

//createHoldingsTemplate()
//  .then( allFundsAndHoldings => allFundsAndHoldings.forEach( fundPayload => writeIntoDynamo(fundPayload, tableNameB) ))
