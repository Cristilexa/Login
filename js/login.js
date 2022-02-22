var tentativa = 3;

function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email == "admin" && password == "admin123") {
		alert("Boas fotos!");
		return;
	}
	
	tentativa--;
	alert(`Você tem mais ${tentativa} tentativas!`); // template string javascript
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";

	if (tentativa == 0) {
		document.getElementById("email").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("enviar").disabled = true;
	}
}
