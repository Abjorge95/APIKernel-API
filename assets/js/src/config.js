// APIKernel Global Configuration File

/* 
    Platform availability of actions

    cLogin - If login funcionaly is available to use
        true - Users can login
        false - Users won't be able to login
        Why: If login problems are detected this can be set to false to prevent new failures while problem is being fixed
    cRegister - If new account can be created
        false - No new account can be created
        true - New accounts can be created
        Why: In case of need to prevent new account of being created
    cNewsletter - If users can sign the newletter
        false - Users cannot sign news letter
        true - User can sign news letter
*/

const cLogin        = false;
const cRegister     = false;
const cNewsletter   = false;

/*
    Limit settings
    
    cLoginlimit - Number of users allowed to login at the same time
        0 - No limit
        > 1 - Max number of logged users
    cRegisterlimit - Max number of account created
        0 - No limit
        > 1 - Max number of account that can be registered on APIKernel
    cValidationtimer - time the user have to insert the validation code
        0 - No limit
        > 1 - Max time (in secs)
*/

const cLoginlimit = 0;
const cRegisterlimit = 0;
const cValidationtimer = 60;

/*
    [ Security settings ]
    
    cMaxloginattempts - Number of attempt failures before the account get a soft ban
        0 - No limit
        > 1 - Number of attempts
    cBantime - Time in minutes of soft ban after reaching the limit of attemps of sMaxloginattempts
    cMaxbanbeforelock - Number of soft bans before the account get locked out, account locked can only be unlocked by staff members
        0 - No limit
        > 1 - Max number of soft bans
    cMaxaccountsperip - Max number of accounts per IP address, all accounts using that IP will get locked if max limit is reached
        0 - No limit
        > 1 - Max number of accounts using the same IP address
*/

const cMaxloginattempts = 3;
const cBantime          = 15;
const cMaxbanbeforelock = 3;
const cMaxaccountsperip = 10;