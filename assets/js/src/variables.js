/*
	Server Settings
	TO BE CHANGED BY SERVER OWNER

	sServerAlias - Server name, used in platform render
	aRealms - Array of realms, used for multiple realms API
		Index 1 - Realm ID
		Index 2 - Realm name
*/

var sServerAlias = "APIKernel";

var aRealms = [
	[1, "APIKernel"],
	[2, "Development"]
]

/*
	[USER TEMP VARIABLES]
*/

var tBirthDate;
var sUsername;
var sEmail;
var sPassword;
var sConfirmPassword;
var bReceiveNewsLetter;

var iCurrentMenu = 0;

/*
	[COLOR CODES]
*/

var cRed 		= "rgb(220, 41, 30, 0.8)";
var cYellow 	= "rgb(255, 228, 181, 0.8)";
var cGreen 		= "rgb(143, 188, 143, 0.8)";
var cDarkGray 	= "rgba(55, 55, 55, 0.8)";
var cGray		= "rgb(108, 117, 125)";

/*
	[SYSTEM VARIABLES]
*/

var path = window.location.pathname;