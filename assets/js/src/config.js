// APIKernel Global Configuration File

/*
	API Backend connection settings
	
	sURL - Domain path for the API web files
*/

const sURL = "http://api.apikernel.com/";

/* 
    Platform availability of actions

    bLogin - If login funcionaly is available to use
        true - Users can login
        false - Users won't be able to login
        Why: If login problems are detected this can be set to false to prevent new failures while problem is being fixed
    bRegister - If new account can be created
        false - No new account can be created
        true - New accounts can be created
        Why: In case of need to prevent new account of being created
    bNewsLetter - If users can sign the newletter
        false - Users cannot sign news letter
        true - User can sign news letter
*/

const bLogin        = false;
const bRegister     = true;
const bNewsLetter   = false;

/*
    Limit settings
    
    iLoginLimit - Number of users allowed to login at the same time
        0 - No limit
        > 1 - Max number of logged users
    iRegisterLimit - Max number of account created
        0 - No limit
        > 1 - Max number of account that can be registered on APIKernel
    iValidationTimer - time the user have to insert the validation code
        0 - No limit
        > 1 - Max time (in secs)
*/

const iLoginLimit = 0;
const iRegisterLimit = 0;
const iValidationTimer = 60;

/*
    [ Security settings ]
    
    iMaxLoginAttempts - Number of attempt failures before the account get a soft ban
        0 - No limit
        > 1 - Number of attempts
    iBanTime - Time in minutes of soft ban after reaching the limit of attemps of sMaxloginattempts
    iMaxBanBeforeLock - Number of soft bans before the account get locked out, account locked can only be unlocked by staff members
        0 - No limit
        > 1 - Max number of soft bans
    iMaxAccountsPerIp - Max number of accounts per IP address, all accounts using that IP will get locked if max limit is reached
        0 - No limit
        > 1 - Max number of accounts using the same IP address
*/

const iMaxLoginAttempts = 3;
const iBanTime          = 15;
const iMaxBanBeforeLock = 3;
const iMaxAccountsPerIp = 10;