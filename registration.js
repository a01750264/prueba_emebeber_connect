const AWS = require('aws-sdk');
var quicksight = new AWS.Service({
    apiConfig: require('./node_modules/aws-sdk/apis/quicksight-2018-04-01.min.json'),
    region: 'us-east-1',
});

// Set the region 
AWS.config.update({
    region: 'us-east-1'
});

var roleToAssume = {
    RoleArn: "arn:aws:iam::559202700801:role/semestreQuickSightRole",
    RoleSessionName: 'QSSessionName'
};
var roleCreds;

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


/*var params = {
    AwsAccountId: '559202700801',
    Email: 'email',
    IdentityType: 'IAM',
    Namespace: 'default',
    UserRole: READER,
    IamArn: 'arn:aws:cognito-identity:us-east-1:559202700801:identitypool/us-east-1_7Kaw5yeFa',
    SessionName: '',
};
quicksight.registerUser(params, function (err, data1) {
    if (err) console.log('err register user');
    // an error occurred
    else {
        // console.log("Register User1”);
    }
}) */

var params = {
    AwsAccountId: 559202700801,
    Email: 'facevesd@gmail.com',
    IdentityType: 'IAM',
    Namespace: 'default',
    UserRole: 'READER',
    IamArn: 'arn:aws:iam::559202700801:role/semestreQuickSightRole',
    SessionName: 'QSSessionName',
};

quicksight.registerUser(params, function (err, data1) {
    if (err) console.log("err register user");
    // an error occurred
    else {
        // console.log("Register User1”);
    }
})

AWS.config.update({
    accessKeyId: 'eyJraWQiOiJ3eFJkVU5rbXczXC95V1wvZ2NJS2RxM0lzR0pxR2RUV0FhTmJaRzA5TWdXZ009IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJiYjJlZjM5MC0wNGFiLTQyNjQtYjU3ZC1hMTcyZDU3OGJjZjQiLCJldmVudF9pZCI6IjEwNDM0NjU3LWM1NjEtNDEzMi1iNmM5LWNjMWM5ODMzOTJiYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MjEwMTU0NTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzdLYXc1eWVGYSIsImV4cCI6MTYyMTEwMTg1MCwiaWF0IjoxNjIxMDE1NDUxLCJqdGkiOiJjMTMwOGYwNC1jMTBiLTQwYjYtYTQ2Mi0yY2FlOGU0Zjc2OGEiLCJjbGllbnRfaWQiOiI2NHNyNGx0ZDVobDduMDZjZTFvbnJscDdvMCIsInVzZXJuYW1lIjoiYmIyZWYzOTAtMDRhYi00MjY0LWI1N2QtYTE3MmQ1NzhiY2Y0In0.MVAhBKXNbPYjpARvSM1R4HGAdGlHAH8GwQeRY4DzeF8qfD9NuZG82ssa38YJo5CTVZxbA7uzDrwFqho_JZy5j4natwuf8WTz7hX1txdyTM0t0d4wJkWz28vUGrIWm5pXIG_5ech6ty5l4_a9UpvqfddABmODV-cEvVGroxKkTO2QHQ180Ay7vbov86iAne98xJDHBpabdXGwGNBmlHJMBEuNEoiH4uEu3pf-OkIS4OENVt1yG5Oe8iF2tZmyTcr0fhXhzTYWo4reoefVBm7oEsHGvj1ieyhK1eikkymsRp2t7UeV2R6h7b_t034d-FbnS0n3GWcWDkgtXsYwA7fDFw',
    secretAccessKey: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.lm4c9aNJApJBeeNYjR-grw-LtK9Mo3vzIxBybtUhYi0eYWcq1t1g65XWfvPKbbv2i8YYvJBbB1eMXG-XO9G8ckiiG9mwnInxYirCbVyeh_KNr8Pls_3pxEvNwDOaf0x2iPNI2B1dPPmBskIgPxFqZ3QgHfi8ELzo7XDE73yytkKj0jyM6RbUVSMWG9J29MG5Yp_4MHWH7POuxMXQEt6pm7zWS5yrgAvCxkpLrjoj2ZKkmj303ol25hzoVA9zPtAd4f4qScsJmS89a_2d3vOgU8S9rmDp1eSYmt8bHUBRfL55wgDWToWNtl2WhXPWU5I_s6sEyFT_fpgPokBN1hrnmA.ryKK4yyotE7a8uHy.XvSmmIVO3tNg6q5DhG8umRFRz9FAv2REEcP_Xx-r4B0cZO_HqRD-KH_5yHe4JSETSQMefMqGD0aYcRfCzZLLqtD5wEsQ4mbxlY3bkQRlvBafxhg4ij3FFgQ47S4A7zgFYawmCfwe8t2V-RLENyVwviqFRDLdZ58ZjjSxLzLKSTExaohvoher-HTW2lHuXUK6SYrpUmev-89cRUe4VGnW0OcQbuZH5giy3VE-mEtJqiwhdjOh31D2BOFRDYFS37AawJuyfS7mJFq4e-mgp0iynL59qrsTQUdkv3EsKsjPvnQtgX1mQ5rJcR6nD6TTqtGOKStmciQSE7gHLFtlY2x6iPbAkn-AdzpojTWZdt4ukoRR8lJJKpACNGuepCly9iwpmMmKwGKjTbYVPbT8OEK4iKq6Vb07Z9zJAcl4wRQ1-NfFk8HkpMCIXFYbBlSGHDGVYMljtQqeG4ytkN6wrjXTCB4706lbHNu9dLQJJQCVZOuDKgROdi1n7wkGRzv_xQGtDjBHBO3gjIFjrS96tSiyYo4T0ysHTYLMzdl2dniJ48C8L43lGkr4XnrkO-1txb71ilVH4kn2gsD8Jn28ZNnzHWjCMsOOsViFHE3d6MnE7GthVzizJoCFTkj1PHXfwGB0GI7h1KnTK_6CFtU-6iTQ73ZsPEZpDDIi87xVNlsvWdNE3TLXAowxQGwlfIcbcfQYwwTv9yT2xWn7feFDTBjLSEGc8lE5H4y1R0bwAbvMTFsBu5LqnzGKOTIM-aXYcxO34ywv9ZdPf_2fIOxPsV0CtYSrg1gkfN7Wh8tg053sGDAZY9vQ7YNu0ajoLoBT3vjABhTi3QTEOf2AwHg6LFoDjHuVGHzrMJ5FGiRkBnElnDXegwqmMHF_O12SXo8sVPBOiOBkOWJIhTcIIz6QS_gBn9axXiGm4Pop15YYT50xLw1i_h1QbX1ISk1nU-qMVg2hIJTwLLir8Kv3DRD7tEBjDI1XsP7GZMGS7WVS5f47GlOOzf6kPdgz_qYYp_7JGmBePm8No0tlnD3G2i4A8uSITlYd4EinSSPcCCQqP79gN02zbnhLIK5blrs51_62e4YkVFplwdA4B1sAz7bgiRC1ys_ZSdGArvAg9I8Gm2wPhJE22QCqMxUHS63cR6g5LAQK7DZl_HamjV3deBr7dyYI8Xb6rTgG8Jknv0-513Lxgy4-aEQr92WxvNHXPwKe81Seq5SXzg2LlCE9KuIfunBErzCGihf_Jwc3zbsSnIkKj6zxjybiDVRy3iagYdyAvJ1w0QCrkbe-wG13KrwfAW_Frf0zxO0BhrSWPy-6AzFdMPe6fzZJvfEVR8xXWw.NCMA4kzgisPj47som2fMcg',
    sessionToken: 'eyJraWQiOiI5Q2FcL0N5eVhBb1wvSERMQzg3VnMxdk5ObE5sXC9sUnE4UFhjbWpCanR0WFE4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiYjJlZjM5MC0wNGFiLTQyNjQtYjU3ZC1hMTcyZDU3OGJjZjQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYmlydGhkYXRlIjoiMjAwMC0wMS0yMCIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzdLYXc1eWVGYSIsImNvZ25pdG86dXNlcm5hbWUiOiJiYjJlZjM5MC0wNGFiLTQyNjQtYjU3ZC1hMTcyZDU3OGJjZjQiLCJtaWRkbGVfbmFtZSI6IkFjZXZlcyIsInBpY3R1cmUiOiItLS0iLCJhdWQiOiI2NHNyNGx0ZDVobDduMDZjZTFvbnJscDdvMCIsImV2ZW50X2lkIjoiMTA0MzQ2NTctYzU2MS00MTMyLWI2YzktY2MxYzk4MzM5MmJiIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjEwMTU0NTAsIm5hbWUiOiJGZXJuYW5kbyIsImV4cCI6MTYyMTAxOTA1MCwiaWF0IjoxNjIxMDE1NDUxLCJlbWFpbCI6ImZhY2V2ZXNkQGdtYWlsLmNvbSJ9.mbpLqx3B0u7T7y_swS2gCK7_afeO9IMHa85BCDGuwmlrQWUwuqhcts_j19BWHfY19AxQk5amSziktx089FHeLZErPh72D2KI5p1rgA0T8cWIZ_mze3SHmP1pis5Akf0ZjjK4BlhPIjJ4HdAq1ZKXi3lFFS_jfUS_4YwWErP2cuxNAJimW5tqQ3r4RzFJuPKQYdc4M6NYafUgxTemSHnOlPCpfJzj3A1rSmJFDzA17ETtUihUfUjI0wqJe4q5US2OjgdQJmvWRWTLbyzCCsv1e8EPZ4lu1RkdQDrKvKP8FE94uF-CGKp8uBdVz9KhzlsplwUBawmvJGjR_UXCxd2TeQ',
    region: 'us-east-1'
});