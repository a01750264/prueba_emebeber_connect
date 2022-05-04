const AWS = require('aws-sdk');

module.exports = {
    getQuickSightUrl: function (idToken, username, callback) {
        //  console.log('Token '+ idToken);
        console.log('called');
        AWS.config.region = 'us-east-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: "us-east-1_7Kaw5yeFa",
            Logins: {
                'arn:aws:cognito-idp:us-east-1:559202700801:userpool/us-east-1_7Kaw5yeFa': idToken
            }
        });
        // console.log(AWS.config.credentials);
        var params = {
            //DurationSeconds: 3600,
            //ExternalId: "123ABC",
            RoleArn: "arn:aws:iam::559202700801:role/semestreQuickSightRole",
            RoleSessionName: username
        };
        var sts = new AWS.STS({
            apiVersion: '2011-06-15'
        });
        sts.assumeRole(params, function (err, data) {
            if (err) console.log("Assumwe erri :::::::::::::::::: ", err, err.stack); // an error occurred
            else {
                // console.log("data: "+data);
                var params = {
                    AwsAccountId: '559202700801',
                    Email: 'facevesd@gmail.com', //used in creating userpool
                    IdentityType: 'IAM', //| QUICKSIGHT, /* required */
                    Namespace: 'default',
                    UserRole: 'READER', //ADMIN | AUTHOR | READER | RESTRICTED_AUTHOR | RESTRICTED_READER, /* required */
                    IamArn: 'arn:aws:iam::559202700801:role/semestreQuickSightRole',
                    SessionName: username,
                };
                AWS.config.update({
                    accessKeyId: data.Credentials.AccessKeyId,
                    secretAccessKey: data.Credentials.SecretAccessKey,
                    sessionToken: data.Credentials.SessionToken,
                    "region": "us-east-1"
                });
                var quicksight = new AWS.Service({
                    apiConfig: require('./node_modules/aws-sdk/apis/quicksight-2018-04-01.min.json'),
                    region: "us-east-1"
                });
                quicksight.registerUser(params, function (err, data1) {
                    if (err) {
                        console.log(":::::::::::::::::::::::");
                        console.log(JSON.stringify(err));
                        if (err.statusCode == 409) {
                            // console.log("Register User :::::::::::::::: ", data1);
                            quicksight.getDashboardEmbedUrl({
                                    AwsAccountId: "559202700801",
                                    DashboardId: "50508cb2-0d09-4239-9242-d9481bc87cc4",
                                    IdentityType: "IAM",
                                    ResetDisabled: true,
                                    SessionLifetimeInMinutes: 400,
                                    UndoRedoDisabled: false
                                },
                                function (err, data) {
                                    if (!err) {
                                        console.log(Date());
                                        callback(data);
                                    } else {
                                        console.log(err);
                                        callback();
                                    }
                                }
                            );
}
                        console.log("err register user ::::::::::::::::::", err, err.stack);
                    } // an error occurred
                    else {
                        // console.log("Register User :::::::::::::::: ", data1);
                        quicksight.getDashboardEmbedUrl({
                                AwsAccountId: "559202700801",
                                DashboardId: "50508cb2-0d09-4239-9242-d9481bc87cc4",
                                IdentityType: "IAM",
                                ResetDisabled: true,
                                SessionLifetimeInMinutes: 400,
                                UndoRedoDisabled: false
                            },
                            function (err, data) {
                                if (!err) {
                                    console.log(Date());
                                    callback(data);
                                } else {
                                    console.log(err);
                                    callback();
                                }
                            }
                        );
                    }
                });
            }
        });
    }
}
}
                        console.log("err register user ::::::::::::::::::", err, err.stack);
                    } // an error occurred
                    else {
                        // console.log("Register User :::::::::::::::: ", data1);
                        quicksight.getDashboardEmbedUrl({
                                AwsAccountId: "854359848205",
                                DashboardId: "d3d6a645-74c7-49a3-9d64-06b12f2d9f74",
                                IdentityType: "IAM",
                                ResetDisabled: true,
                                SessionLifetimeInMinutes: 400,
                                UndoRedoDisabled: false
                            },
                            function (err, data) {
                                if (!err) {
                                    console.log(Date());
                                    callback(data);
                                } else {
                                    console.log(err);
                                    callback();
                                }
                            }
                        );
                    }
                });
            }
        });
    }
}