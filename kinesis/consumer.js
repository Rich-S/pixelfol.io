const sdkPack = require('../src/Config.js').sdkPack;
const deBuffer = require('../services/deBuffer.js').deBuffer;
const kinesis = sdkPack.kinesis;
const updateIntoDynamo = require('../dynamoDB/updateIntoDynamo.js').updateIntoDynamo;

const streamName = "iex-live";
const tableName = 'iex-stock-universe';



function consumerFunction() {
  kinesis.describeStream({ StreamName: streamName }, function(err, streamData) {
    if (err) {
      //console.log(err, err.stack); // an error occurred
    }
    else {
      streamData.StreamDescription.Shards.forEach(shard => {
        kinesis.getShardIterator({
          ShardId: shard.ShardId,
          ShardIteratorType: 'TRIM_HORIZON',
          StreamName: streamName
        }, function(err, shardIteratordata) {
          if (err) {
            //console.log(err, err.stack); // an error occurred
          }
          else {
            //console.log(shardIteratordata); // successful response
            kinesis.getRecords({
              ShardIterator: shardIteratordata.ShardIterator
            }, function(err, recordsData) {
              if (err) {
                //console.log(err, err.stack); // an error occurred
              }
              else {
                let records = recordsData.Records;
                if (records.length > 0) {
                  let arrayOfObjects = records.map(d => d.Data).map(_d => deBuffer(_d)).filter(d=>d.securityType === 'commonstock');
                  // write into dynamo
                  // console.log(arrayOfObjects) //  successful response
                  arrayOfObjects.forEach(obj => updateIntoDynamo(obj,tableName))
                }
              }
            });
          }
        });
      });
    }
  });
}

consumerFunction()
/*
{ symbol: 'SAUC',
   sector: 'consumerservices',
   securityType: 'commonstock',
   bidPrice: 0,
   bidSize: 0,
   askPrice: 0,
   askSize: 0,
   lastUpdated: 1538769600000,
   lastSalePrice: 1.34,
   lastSaleSize: 100,
   lastSaleTime: 1538767105068,
   volume: 200,
   marketPercent: 0.00168,
   seq: 13 },
*/
