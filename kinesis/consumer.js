const sdkPack = require('../src/Config.js').sdkPack;
const kinesis = sdkPack.kinesis;

const streamName = "iex-live";


function consumerFunction() {
  kinesis.describeStream({ StreamName: streamName }, function(err, streamData) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    }
    else {
      streamData.StreamDescription.Shards.forEach(shard => {
        kinesis.getShardIterator({
          ShardId: shard.ShardId,
          ShardIteratorType: 'TRIM_HORIZON',
          StreamName: streamName
        }, function(err, shardIteratordata) {
          if (err) {
            console.log(err, err.stack); // an error occurred
          }
          else {
            console.log(shardIteratordata); // successful response
            kinesis.getRecords({
              ShardIterator: shardIteratordata.ShardIterator
            }, function(err, recordsData) {
              if (err) {
                console.log(err, err.stack); // an error occurred
              }
              else {
                let records = recordsData.Records;
                if (records.length > 0) {
                  console.log(records.map(d => JSON.parse(d.Data))) //  successful response
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
