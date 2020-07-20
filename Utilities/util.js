

// Define Error Codes
let statusCode = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEEN: 7,
    EIGHT: 8,
    NINE: 9,
    OK: 200,
    FOUR_ZERO_FOUR: 404,
    FOUR_ZERO_THREE: 403,
    FOUR_ZERO_ONE: 401,
    FIVE_ZERO_ZERO: 500
};





// Define Error Messages
let statusMessage = {
    PARAMS_MISSING : 'Parameters are missing!',
    SERVER_BUSY : 'Our Servers are busy. Please try again later.',
    EMAIL_ALREADY_REGISTERED : 'Email already registered, Try another.',
    USER_REGISTERED_SUCCESSFULLY : 'You have registered successfully. Please Verify email and login to continue',
    PLEASE_SIGNUP_FIRST: 'Your email is not Registered, Please Sign up First.',
    LOGGED_IN: 'You have sucessfully Logged in',
    ENTER_VALID_PASS: 'Please enter your valid password.',
    EMAIL_NOT_EXIST: 'Entered email does not exist.',
    EMAIL_VERIFIED : 'Congratulations! Your email has verified successfully!',
    EMAIL_ALREADY_VERIFIED: 'Email has  been already verified!.',
    REGISTRATION_DONE : 'Registration completed!',
    ID_NOT_EXIST : 'Invalid Id!',
    SUCCESS : 'success',
    SUCESSFULLY_VERIFIED : 'User successfully verified!'
};


module.exports = {
    statusCode: statusCode,
    statusMessage: statusMessage,
}