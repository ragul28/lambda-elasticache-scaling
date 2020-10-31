'use strict';

const AWS = require("aws-sdk")

const elasticache = new AWS.ElastiCache({
  apiVersion: '2015-02-02'
});

const redisRepGID = process.env.REDIS_CLUSTER_REPGID

// Redis Scale up fn
module.exports.redisScaleup = async event => {

  const params = {
    ReplicationGroupId: redisRepGID,
    CacheNodeType: 'cache.m5.large',
    ApplyImmediately: true,
  };

  return elasticache.modifyReplicationGroup(params).promise()
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

// Redis Scale down fn
module.exports.redisScaledown = async event => {

  const params = {
    ReplicationGroupId: redisRepGID,
    CacheNodeType: 'cache.t3.medium',
    ApplyImmediately: true,
  };

  return elasticache.modifyReplicationGroup(params).promise()
    .then((data) => {
      console.log(data);
      return;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};