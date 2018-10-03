const kinesis = require('../src/Config.js').sdkPack.kinesis;
const streamName = "iex-live",
  //  Number of shards
  numberOfPartitions = 10;

exports.kinesisConfigs = {
  kinesis: kinesis,
  streamName: streamName,
  numberOfPartitions: numberOfPartitions
}
