const congnitoConfig = require("../Utilities/config").config;
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
global.fetch = require("node-fetch");
const fs = require('fs');

const poolData = {
    UserPoolId: congnitoConfig.COGNITO_IDENTITY_POOL_ID,
    ClientId: congnitoConfig.AMAZON_APP_CLIENT_ID
  };


const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


/**Method for user register API */
const createUser = objToSave =>
  new Promise((resolve, reject) => {
    let attributeList = [
      new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: objToSave.email })
    ];
    
    userPool.signUp(objToSave.username,objToSave.password,attributeList, null,(err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      else{
        let cognitoUser = result.user;
        console.log("user name is " + cognitoUser.getUsername());
        resolve(result);
      }
    });
  });

/**Method for verify user API */
const verifyUser = objToSave =>
  new Promise((resolve, reject) => {
    
    var userData = {
      Username: objToSave.email,
      Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(objToSave.code, true, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  });

  /** Method for Login user API */
 const fetchUser = criteria =>
   new Promise((resolve, reject) => {
     var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
       {
         Username: criteria.username,
         Password: criteria.password
       }
     );
 
     let userData = {
       Username: criteria.username,
       Pool: userPool
     };
     var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
 
     cognitoUser.authenticateUser(authenticationDetails, {
       onSuccess: function(result) {
         // console.log("access token + " + result.getAccessToken().getJwtToken());
         // console.log("id token + " + result.getIdToken().getJwtToken());
         // console.log("refresh token + " + result.getRefreshToken().getToken());
         resolve(result);
       },
       onFailure: function(err) {
         console.log(err);
         reject(err);
       }
     });
   });

const readLog = () => {
    const logFile = './logs/access.log';
    return new Promise((resolve, reject) => {
        fs.readFile(logFile, 'utf8', (err, contents) => {
            if(err) { reject(err); }
            resolve(contents.toString().split(/\n/).reverse());
        });
    });
};


  module.exports = {
    createUser,
    fetchUser,
    verifyUser,
    readLog
  };
  
























