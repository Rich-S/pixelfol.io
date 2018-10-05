const createTemplate = require('./services/createTemplate.js').createTemplate;
const writeIntoDynamo = require('./dynamoDB/writeIntoDynamo.js').writeIntoDynamo;

const tableName = 'stock-universe';

createTemplate()
  .then( allListedStocks => allListedStocks.forEach( securityPayload => writeIntoDynamo(securityPayload, 'stock-universe')))
