let config = {
    "AWS_REGION": "us-east-2",
    "COGNITO_IDENTITY_POOL_ID": "us-east-2_0ybs5cex5",
    "IAM_ROLE_ARN": "arn:aws:cognito-idp:us-east-2:490752027248:userpool/us-east-2_0ybs5cex5",
    "CALLBACKURL": "http://localhost:3000/auth/amazon/callback",
    "AMAZON_APP_CLIENT_ID": "3h4h8vtv7jd8u7q256vulsdpsc", 
};

module.exports = {
    config: config
};
