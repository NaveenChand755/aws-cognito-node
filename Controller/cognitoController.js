const util = require('../Utilities/util');
const CongnitoService = require('../Services/CognitoService');
const fs = require('fs');

/* API to signup new user */
let signup = async (data, callback) => {
    if (!data.email || !data.username || !data.password) {
      callback({
        statusCode: util.statusCode.FOUR_ZERO_ONE,
        statusMessage: util.statusMessage.PARAMS_MISSING
      });
      return;
    } else {
      try {
        let userData = {
          email: data.email,
          username: data.username,
          password: data.password,
        };
        const addUser = await CongnitoService.createUser(userData);
        if (addUser) {
          callback({
            statusCode: util.statusCode.OK,
            statusMessage: util.statusMessage.USER_REGISTERED_SUCCESSFULLY,
            result : addUser
          });
          return;
        } else {
          callback({
            statusCode: util.statusCode.FOUR_ZERO_ONE,
            statusMessage: util.statusMessage.SERVER_BUSY
          });
          return;
        }
      } catch (error) {
        callback({
          statusCode: util.statusCode.FOUR_ZERO_FOUR,
          statusMessage: error.message
        });
        return;
      }
    }
  };
 

/** API to verify user... */
let verifyUser = async (data, callback) => {
    if (!data.email) {
      callback({
        statusCode: util.statusCode.ONE,
        statusMessage: util.statusMessage.PARAMS_MISSING
      });
      return;
    } else {
      try {
        let userData = {email:data.email,code:data.code}
        const authenticateUser = await CongnitoService.verifyUser(userData);
        if (authenticateUser) {
          callback({
            statusCode: util.statusCode.OK,
            statusMessage: util.statusMessage.SUCESSFULLY_VERIFIED,
            result: authenticateUser
          });
        } else {
          callback({
            statusCode: util.statusCode.FOUR_ZERO_ONE,
            statusMessage: util.statusMessage.ENTER_VALID_PASS
          });
        }
        return;
      } catch (error) {
        callback({
          statusCode: util.statusCode.FOUR_ZERO_ONE,
          statusMessage: error.message
        });
        return;
      }
    }
  };


// /* API to login user */
let login = async (data, callback) => {
    if (!data.username || !data.password) {
      callback({
        statusCode: util.statusCode.FOUR_ZERO_ONE,
        statusMessage: util.statusMessage.PARAMS_MISSING
      });
      return;
    } else {
      try {
        let criteria = { username: data.username, password: data.password };
        const checkUser = await CongnitoService.fetchUser(criteria);
        if (checkUser) {
          callback({
            statusCode: util.statusCode.OK,
            statusMessage: util.statusMessage.LOGGED_IN,
            result: checkUser
          });
        } else {
          callback({
            statusCode: util.statusCode.FOUR_ZERO_ONE,
            statusMessage: util.statusMessage.ENTER_VALID_PASS
          });
        }
        return;
      } catch (error) {
        callback({
          statusCode: util.statusCode.FOUR_ZERO_ONE,
          statusMessage: error
        });
        return;
      }
    }
  };

 

const ngnixParser= () => {
    const logFile = './logs/access.log';
    return new Promise((resolve, reject) => {
        fs.readFile(logFile, 'utf8', (err, contents) => {
            if(err) { reject(err); }
            if(contents)
            resolve(contents.toString().split(/\n/).reverse());
        });
    });
};

module.exports = {
    signup: signup,
    login:login,
    verifyUser:verifyUser,
    ngnixParser
}