const writeIntoDynamo = require('./dynamoDB/writeIntoDynamo.js').writeIntoDynamo;
const createTemplate = require('./services/createTemplate.js').createTemplate;

createTemplate()
  .then( allListedStocks => allListedStocks.forEach( securityPayload => writeIntoDynamo(securityPayload, 'universe-table')))
