# AWS Lambda Elasticache scaling 

Modify or Scale any AWS resource using schduled lambda function. This template shows schedule based vertical scaling of AWS Elasticache (redis) cluster. Here eventbridge schedule used as lambda trigger. If error occurred email is dispatched via SNS.

## Stack
- Lambda
- Elasticache
- Eventbridge
- SNS
- Serverless framework

## Usage Guide

1. Create config file using sample config template.
```bash
cp config.sample.yml config.yml
```

2. Fill the relevant values in config yml file. 
- AWS Profile
- redis Cluster
- Email
- Scale up & down cron time

3. deploy using serverless.
```bash
sls deploy
```