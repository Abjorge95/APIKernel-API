/*
	Registration page design functions
*/

function register() {

	if (bRegister == true) {
		
		var bStatus;

		switch(iCurrentMenu) {
			case 0:
				
				bStatus = true;
				
				var oRegistrationEmail = document.getElementById("register--email");
				var oRegistrationNews = document.getElementById("register--news");
				var oRegistrationStep = document.getElementsByClassName("registration--step");
				var sEmailRegex = /\S+@\S+\.\S+/;
				
				if (sEmailRegex.test(String(oRegistrationEmail.value).toLowerCase()) == false) {
					bStatus = false;
				}
				
				if (requestEmailDisponibility(oRegistrationEmail.value) == false) {
					bStatus = false;
				}

				if (bStatus == true) {
					bReceiveNewsLetter = oRegistrationNews.checked;
					sEmail = String(oRegistrationEmail.value).toLowerCase();

					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
					iCurrentMenu++;
					oRegistrationStep[iCurrentMenu].style.backgroundColor = cRed;
					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
				} else {
					alertError("Invalid email", "Please insert a valid email.")
				}

				break;
			case 1:
				bStatus = true;
				var oRegisterDate = document.getElementById("register--date");
				var oRegistrationStep = document.getElementsByClassName("registration--step");
				
				if (oRegisterDate.value.length == 0) {
					bStatus = false;
				}
				
				if (bStatus == true) {
					tBirthDate = oRegisterDate.value;

					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
					iCurrentMenu++;
					oRegistrationStep[iCurrentMenu].style.backgroundColor = cRed;
					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
				} else {
					alertError("Invalid Birthdate", "Please fill the form with your birthdate.")
				}
				
				break;
			case 2:
				bStatus = true;
				var oRegisterUsername = document.getElementById("register--username");
				var oRegistrationStep = document.getElementsByClassName("registration--step");
				
				if (oRegisterUsername.value.length == 0) {
					bStatus = false;
				}
				
				if (requestUserDisponibility(oRegisterUsername.value) == false) {
					bStatus = false;
				}
				
				if (bStatus == true) {
					sUsername = oRegisterUsername.value;

					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
					iCurrentMenu++;
					oRegistrationStep[iCurrentMenu].style.backgroundColor = cRed;
					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
				} else {
					alertError("Invalid Username", "Please insert the username you would like to use.")
				}
				
				break;
			case 3:
				bStatus = true;
				
				break;
			default:
				console.log("Registration menu error");
		}
		
	} else {
		
		alertDefault("Register disabled.", "You are unable to register now, please come back later.")
	
	}

}

/*
	Register Real Time Password Validations
*/

function rtpasswordvalidation() {
	var oPassword = document.getElementById("register--password");
	var oPasswordConfirm = document.getElementById("register--password-confirm");
	var oStrengthLevel = document.getElementsByClassName("validation--strength-level");
	var oStrengthString = document.getElementsByClassName("validation--strength-string");
	var rStrongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
	var rMediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    
	if (oPassword.value.length > 0) {
		
		$('#validation--strength').slideDown("fast");
		
		if (rStrongRegex.test(oPassword.value)) {
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = cDarkGray;
			}
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = cGreen;
			}
			oStrengthString[0].innerText = "Strong";
			document.getElementsByClassName("validation--password-box")[0].checked = true;
			document.getElementsByClassName("validation--password-string")[0].style.color = cGray;
		} else if (rMediumRegex.test(oPassword.value)) {
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = cDarkGray;
			}
			for ( i = 0; i <= 2; i++ ) {
				oStrengthLevel[i].style.backgroundColor = cYellow;
			}
			oStrengthString[0].innerText = "Not enought";
			document.getElementsByClassName("validation--password-box")[0].checked = false;
			document.getElementsByClassName("validation--password-string")[0].style.color = cRed;
		} else {
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = cDarkGray;
			}
			for ( i = 0; i < 1; i++ ) {
				oStrengthLevel[i].style.backgroundColor = cRed;
			}
			oStrengthString[0].innerText = "Weak";
			document.getElementsByClassName("validation--password-box")[0].checked = false;
			document.getElementsByClassName("validation--password-string")[0].style.color = cRed;
		}	
	} else {
		
		$('#validation--strength').slideUp("fast");
		
	}
	
	if (oPassword.value.length >= 8) {
		document.getElementsByClassName("validation--password-box")[1].checked = true;
		document.getElementsByClassName("validation--password-string")[1].style.color = cGray;
	} else {
		document.getElementsByClassName("validation--password-box")[1].checked = false;
		document.getElementsByClassName("validation--password-string")[1].style.color = cRed;
	}
	
	if (oPassword.value != oPasswordConfirm.value) {
		document.getElementsByClassName("validation--password-box")[2].checked = false;
		document.getElementsByClassName("validation--password-string")[2].style.color = cRed;
	} else {
		document.getElementsByClassName("validation--password-box")[2].checked = true;
		document.getElementsByClassName("validation--password-string")[2].style.color = cGray;
	}
	
}

window.onscroll = function() {if(path.includes('docs')){scrollFunction()}};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("sidebar-wrapper").style.margin = "-55px 0px 0px -250px";
  } else {
    document.getElementById("sidebar-wrapper").style.margin = "0px 0px 0px -250px";
  }
}