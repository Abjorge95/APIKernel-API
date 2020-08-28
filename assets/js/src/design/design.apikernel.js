/*
	Registration page design functions
*/

function register() {

	if (bRegister == true) {
		
		var bStatus;

		switch(iCurrentMenu) {
			case 0:
				bStatus = true;
				oRegistrationEmail = document.getElementById("register--email");
				oRegistrationNews = document.getElementById("register--news");
				oRegistrationStep = document.getElementsByClassName("registration--step");

				const sEmailRe = /\S+@\S+\.\S+/;
				if (sEmailRe.test(String(oRegistrationEmail.value).toLowerCase()) == false) {
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
					oRegistrationStep[iCurrentMenu].style.backgroundColor = "rgba(220,41,30,0.8)";
					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
				} else {
					alertError("Invalid email", "Please insert a valid email.")
				}

				break;
			case 1:
				bStatus = true;
				oRegisterDate = document.getElementById("register--date");
				oRegistrationStep = document.getElementsByClassName("registration--step");
				
				if (oRegisterDate.value.length == 0) {
					bStatus = false;
				}
				
				if (bStatus == true) {
					tBirthDate = oRegisterDate.value;

					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
					iCurrentMenu++;
					oRegistrationStep[iCurrentMenu].style.backgroundColor = "rgba(220,41,30,0.8)";
					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
				} else {
					alertError("Invalid Birthdate", "Please fill the form with your birthdate.")
				}
				
				break;
			case 2:
				bStatus = true;
				oRegisterUsername = document.getElementById("register--username");
				//.value.length;
				
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
					oRegistrationStep[iCurrentMenu].style.backgroundColor = "rgba(220,41,30,0.8)";
					$('.registration--panel').eq(iCurrentMenu).slideToggle("slow");
				} else {
					alertError("Invalid Birthdate", "Please fill the form with your birthdate.")
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
	oPassword = document.getElementById("register--password");
	oPasswordConfirm = document.getElementById("register--password-confirm");
	oStrengthLevel = document.getElementsByClassName("validation--strength-level");
	oStrengthString = document.getElementsByClassName("validation--strength-string");
    rStrongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    rMediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    
	if (oPassword.value.length > 0) {
		
		$('#validation--strength').slideDown("fast");
		
		if (rStrongRegex.test(oPassword.value)) {
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = "rgba(55,55,55,0.8)";
			}
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = "#8FBC8F";
			}
			oStrengthString[0].innerText = "Strong";
			document.getElementsByClassName("validation--password-box")[0].checked = true;
			document.getElementsByClassName("validation--password-string")[0].style.color = "#6c757d";
		} else if (rMediumRegex.test(oPassword.value)) {
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = "rgba(55,55,55,0.8)";
			}
			for ( i = 0; i <= 2; i++ ) {
				oStrengthLevel[i].style.backgroundColor = "rgb(255,228,181)";
			}
			oStrengthString[0].innerText = "Not enought";
			document.getElementsByClassName("validation--password-box")[0].checked = false;
			document.getElementsByClassName("validation--password-string")[0].style.color = "#dc291e";
		} else {
			for ( i = 0; i <= 4; i++ ) {
				oStrengthLevel[i].style.backgroundColor = "rgba(55,55,55,0.8)";
			}
			for ( i = 0; i < 1; i++ ) {
				oStrengthLevel[i].style.backgroundColor = "rgb(220,41,30)";
			}
			oStrengthString[0].innerText = "Weak";
			document.getElementsByClassName("validation--password-box")[0].checked = false;
			document.getElementsByClassName("validation--password-string")[0].style.color = "#dc291e";
		}	
	} else {
		
		$('#validation--strength').slideUp("fast");
		
	}
	
	if (oPassword.value.length >= 8) {
		document.getElementsByClassName("validation--password-box")[1].checked = true;
		document.getElementsByClassName("validation--password-string")[1].style.color = "#6c757d";
	} else {
		document.getElementsByClassName("validation--password-box")[1].checked = false;
		document.getElementsByClassName("validation--password-string")[1].style.color = "#dc291e";
	}
	
	if (oPassword.value != oPasswordConfirm.value) {
		document.getElementsByClassName("validation--password-box")[2].checked = false;
		document.getElementsByClassName("validation--password-string")[2].style.color = "#dc291e";
	} else {
		document.getElementsByClassName("validation--password-box")[2].checked = true;
		document.getElementsByClassName("validation--password-string")[2].style.color = "#6c757d";
	}
	
}