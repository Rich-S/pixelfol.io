const kinesis = require('../src/Config.js').sdkPack.kinesis;

const streamName = "iex-live",
  //  Number of shards
  numberOfPartitions = 10;

exports.producerFunction = function(data) {
  let partitionKeyNumber = Math.floor(Math.random() * numberOfPartitions);
  kinesis.putRecord({
  	Data: data,
  	PartitionKey: "partition-no-" + partitionKeyNumber,
    StreamName: streamName
  }, function(err, data) {
    if (err) {
    	console.log(err, err.stack); // an error occurred
    }
  });
}
