'use strict';

const AWS = require("aws-sdk")

const elasticache = new AWS.ElastiCache({
  apiVersion: '2015-02-02'
});

const redisRepGID = process.env.REDIS_CLUSTER_REPGID
const redisScaleupNodeType = process.env.REDIS_SCALEUP_NODE
const redisScaledownNodeType = process.env.REDIS_SCALEDOWN_NODE

// Redis Scale up fn
module.exports.redisScaleup = async event => {

  const params = {
    ReplicationGroupId: redisRepGID,
    CacheNodeType: redisScaleupNodeType,
    ApplyImmediately: true,
  };

  return elasticache.modifyReplicationGroup(params).promise()
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

// Redis Scale down fn
module.exports.redisScaledown = async event => {

  const params = {
    ReplicationGroupId: redisRepGID,
    CacheNodeType: redisScaledownNodeType,
    ApplyImmediately: true,
  };

  return elasticache.modifyReplicationGroup(params).promise()
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};