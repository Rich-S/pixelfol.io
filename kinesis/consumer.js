const sdkPack = require('../src/Config.js').sdkPack;
const deBuffer = require('../services/deBuffer.js').deBuffer;
const kinesis = sdkPack.kinesis;
const dynamo = sdkPack.dynamo;

const streamName = "iex-live";
const tableName = 'iex-transactions-stream';

function writeIntoDynamo(obj, record) {
  let params = { Item: { symbol: obj, Record: record }, TableName: tableName };
  dynamo.put(params, function(err, data){ if (err) { console.log(err) } else { console.log(data)}});
}

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
                  let arrayOfObjects = records.map(d => d.Data).map(_d => deBuffer(_d));
                  // write into dynamo
                  console.log(arrayOfObjects) //  successful response
                  arrayOfObjects.forEach(obj => writeIntoDynamo(obj.symbol, obj))
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
