const AWS = require('aws-sdk');

var quicksight = new AWS.Service({
    apiConfig: require('./node_modules/aws-sdk/apis/quicksight-2018-04-01.min.json'),
    region: 'us-east-1',
});

AWS.config.update({
    region: 'us-east-1'
});

var roleToAssume = {
    RoleArn: "arn:aws:iam::559202700801:role/semestreQuickSightRole",
    RoleSessionName: 'QSSessionName'
};

// Create the STS service object    
var sts = new AWS.STS({
    apiVersion: '2011-06-15'
});

//Assume Role
sts.assumeRole(roleToAssume, function (err, data) {
    if (err) console.log(err, err.stack);
    else {
        console.log(data);
    }
});



