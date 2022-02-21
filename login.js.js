var tentativa = 3;

function validar() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
}

if (email == "admin" && password == "admin123"){
	alert ("Boas fotos!");
	window.location = "fotos.html";
	return false;
} else {
	tentativa --;
	alert ("Tem mais" + tentativa + "tentativas");}

if (tentativa == 0) {
	document.getElementById ("email").disabled = true;
	document.getElementById ("password").disabled = true;
	document.getElementById ("enviar").disabled = true;
	return false;
}