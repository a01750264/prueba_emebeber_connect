var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the IAM service object
var iam = new AWS.IAM({apiVersion: '2010-05-08'});

var myManagedPolicy = {
   "Version": "2012-10-17",
   "Statement": [
       {
           "Action": "quicksight:RegisterUser",
           "Resource": "*",
           "Effect": "Allow"
       },
       {
           "Action": "quicksight:GetDashboardEmbedUrl",
           "Resource": "*",
           "Effect": "Allow"
       },
       {
           "Action": "sts:AssumeRole",
           "Resource": "*",
           "Effect": "Allow"
       }
   ]
}
/*{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Action": [
               "ec2:DescribeInstanceStatus"
           ],
           "Resource": "*"
       },
       {
           "Effect": "Allow",
           "Action": [
               "ssm:CreateAssociation"
           ],
           "Resource": "arn:aws:ssm:us-east-1:559202700801:document/Autoscale-JoinDomain"
       },
       {
           "Effect": "Allow",
           "Action": [
               "ds:CreateComputer",
               "ds:DescribeDirectories"
           ],
           "Resource": "*"
       },
       {
           "Effect": "Allow",
           "Action": [
               "ssm:DescribeAssociation",
               "ssm:GetDeployablePatchSnapshotForInstance",
               "ssm:GetDocument",
               "ssm:DescribeDocument",
               "ssm:GetManifest",
               "ssm:GetParameters",
               "ssm:ListAssociations",
               "ssm:ListInstanceAssociations",
               "ssm:PutInventory",
               "ssm:PutComplianceItems",
               "ssm:PutConfigurePackageResult",
               "ssm:UpdateAssociationStatus",
               "ssm:UpdateInstanceAssociationStatus",
               "ssm:UpdateInstanceInformation"
           ],
           "Resource": "*"
       },
       {
           "Effect": "Allow",
           "Action": [
               "ssmmessages:CreateControlChannel",
               "ssmmessages:CreateDataChannel",
               "ssmmessages:OpenControlChannel",
               "ssmmessages:OpenDataChannel"
           ],
           "Resource": "*"
       },
       {
           "Effect": "Allow",
           "Action": [
               "ec2messages:AcknowledgeMessage",
               "ec2messages:DeleteMessage",
               "ec2messages:FailMessage",
               "ec2messages:GetEndpoint",
               "ec2messages:GetMessages",
               "ec2messages:SendReply"
           ],
           "Resource": "*"
       }
   ]
}*/
/*{
   "Version": "2012-10-17",
   "Statement":[
       {
           "Effect":"Allow",
           "Action":[
               "route53:*", 
               "route53domains:*",
               "cloudfront:ListDistributions",
               "elasticloadbalancing:DescribeLoadBalancers",
               "elasticbeanstalk:DescribeEnvironments",
               "s3:ListAllMyBuckets",
               "s3:GetBucketLocation",
               "s3:GetBucketWebsite",
               "ec2:DescribeRegions",
               "ec2:DescribeVpcs",
               "ec2:CreateNetworkInterface",
               "ec2:CreateNetworkInterfacePermission",
               "ec2:DeleteNetworkInterface",
               "ec2:DescribeAvailabilityZones",
               "ec2:DescribeNetworkInterfaces",
               "ec2:DescribeSecurityGroups",
               "ec2:DescribeSubnets",
               "ec2:ModifyNetworkInterfaceAttribute",
               "sns:ListTopics",
               "sns:ListSubscriptionsByTopic",
               "sns:CreateTopic",
               "kms:ListAliases",
               "kms:DescribeKey",
               "kms:CreateKey",
               "kms:CreateAlias",
               "cloudwatch:DescribeAlarms",
               "cloudwatch:PutMetricAlarm",
               "cloudwatch:DeleteAlarms",
               "cloudwatch:GetMetricStatistics"
           ],
           "Resource":"*"
       },
       {
           "Effect": "Allow",
           "Action": "apigateway:GET",
           "Resource": "arn:aws:apigateway:*::/domainnames"
       }
   ]
}*/

/*var myManagedPolicy ={
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ds:AuthorizeApplication",
                "ds:UnauthorizeApplication",
                "ds:CheckAlias",
                "ds:CreateAlias",
                "ds:DescribeDirectories",
                "ds:DescribeTrusts",
                "ds:DeleteDirectory",
                "ds:CreateIdentityPoolDirectory",
                "iam:ListAccountAliases",
                "quicksight:CreateUser",
                "quicksight:Subscribe"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Deny",
            "Action": 
                "quicksight:Unsubscribe",
            "Resource": "*"
        }
    ]
};*/

/*var myManagedPolicy = {
  "Version": "2012-10-17",
  "Statement": [
      {
          "Effect": "Allow",
          "Action": [
              "quicksight:CreateCustomPermissions",
              "quicksight:DescribeCustomPermissions",
              "quicksight:ListCustomPermissions",
              "quicksight:UpdateCustomPermissions",
              "quicksight:DeleteCustomPermissions"

          ],
          "Resource": "*"
      }
  ]
}*/

/*var myManagedPolicy = {
  "Version": "2012-10-17",
  "Statement": [
      {
          "Effect": "Allow",
          "Action": [
              "quicksight:GetDashboardEmbedUrl"
          ],
          "Resource": "*"
      }
  ]
}*/


/*var myManagedPolicy ={
  "Transform": "AWS::Serverless-2016-10-31",
  "Metadata": {
     "AWS::ServerlessRepo::Application": {
        "Name": "AthenaDynamoDBConnector",
        "Description": "This connector enables Amazon Athena to communicate with DynamoDB, making your tables accessible via SQL.",
        "Author": "default author",
        "SpdxLicenseId": "Apache-2.0",
        "LicenseUrl": "LICENSE.txt",
        "ReadmeUrl": "README.md",
        "Labels": [
           "athena-federation"
        ],
        "HomePageUrl": "https://github.com/awslabs/aws-athena-query-federation",
        "SemanticVersion": "2021.18.1",
        "SourceCodeUrl": "https://github.com/awslabs/aws-athena-query-federation"
     }
  },
  "Parameters": {
     "AthenaCatalogName": {
        "Description": "The name you will give to this catalog in Athena. It will also be used as the function name. This name must satisfy the pattern ^[a-z0-9-_]{1,64}$",
        "Type": "String",
        "AllowedPattern": "^[a-z0-9-_]{1,64}$"
     },
     "SpillBucket": {
        "Description": "The name of the bucket where this function can spill data.",
        "Type": "String"
     },
     "SpillPrefix": {
        "Description": "The prefix within SpillBucket where this function can spill data.",
        "Type": "String",
        "Default": "athena-spill"
     },
     "LambdaTimeout": {
        "Description": "Maximum Lambda invocation runtime in seconds. (min 1 - 900 max)",
        "Default": 900,
        "Type": "Number"
     },
     "LambdaMemory": {
        "Description": "Lambda memory in MB (min 128 - 3008 max).",
        "Default": 3008,
        "Type": "Number"
     },
     "DisableSpillEncryption": {
        "Description": "WARNING: If set to 'true' encryption for spilled data is disabled.",
        "Default": "false",
        "Type": "String"
     }
  },
  "Resources": {
     "ConnectorConfig": {
        "Type": "AWS::Serverless::Function",
        "Properties": {
           "Environment": {
              "Variables": {
                 "disable_spill_encryption": null,
                 "spill_bucket": null,
                 "spill_prefix": null
              }
           },
           "FunctionName": null,
           "Handler": "com.amazonaws.athena.connectors.dynamodb.DynamoDBCompositeHandler",
           "CodeUri": "./target/athena-dynamodb-1.0.jar",
           "Description": "Enables Amazon Athena to communicate with DynamoDB, making your tables accessible via SQL",
           "Runtime": "java8",
           "Timeout": null,
           "MemorySize": null,
           "Policies": [
              {
                 "Statement": [
                    {
                       "Action": [
                          "dynamodb:DescribeTable",
                          "dynamodb:ListSchemas",
                          "dynamodb:ListTables",
                          "dynamodb:Query",
                          "dynamodb:Scan",
                          "glue:GetTableVersions",
                          "glue:GetPartitions",
                          "glue:GetTables",
                          "glue:GetTableVersion",
                          "glue:GetDatabases",
                          "glue:GetTable",
                          "glue:GetPartition",
                          "glue:GetDatabase",
                          "athena:GetQueryExecution",
                          "s3:ListAllMyBuckets"
                       ],
                       "Effect": "Allow",
                       "Resource": "*"
                    }
                 ],
                 "Version": "2012-10-17"
              },
              {
                 "S3CrudPolicy": {
                    "BucketName": null
                 }
              }
           ]
        }
     }
  }
}*/




var params = {
  PolicyDocument: JSON.stringify(myManagedPolicy),
  PolicyName: 'semestreiQuickSightURLRole',
};

iam.createPolicy(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});