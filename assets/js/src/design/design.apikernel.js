/*
	Registration page design functions
*/

function Register() {
	switch(rCurrentmenu) {
		case 0:
			RegisterPhase1();
			break;
		case 1:
			RegisterPhase2();
			break;
		case 2:
			RegisterPhase3();
			break;
		case 4:
			RegisterPhase4();
			break;
		default:
			console.log("Registration menu error"); // Change future function of error toster
	}
}

function RegisterPhase1() {
	var status = true;

	const emailre = /\S+@\S+\.\S+/;
    if (emailre.test(String(document.getElementById("register--email").value).toLowerCase()) == false) {
        status = false;
	}

	if (status == true) {
		rCurrentmenu++;
		Register();
	} else {
		
	}
}

function RegisterPhase2() {

}

function RegisterPhase3() {

}

function RegisterPhase4() {

}