//var dialog = document.getElementsByTagName("dialog");
//var txtUsuario = document.getElementById('txtUsuario');
//var txtContraseña = document.getElementById('txtContraseña');
//var txtUsuarioR = document.getElementById('txtUsuarioR');
//var txtContraseñaR = document.getElementById('txtContraseñaR');
//var txtNombreUsuario = document.getElementById('txtNombreUsuario');
//var txtApellidosUsuario = document.getElementById('txtApellidosUsuario');
//var txtDireccionUsuario = document.getElementById('txtDireccionUsuario');
//var txtDNIUsuario = document.getElementById('txtDNIUsuario');
//var btnLogin = document.getElementById('btnLogin');
//var btnRegistro = document.getElementById('btnRegistro');

window.onload = function () {
	var id = document.getElementById("idpage").className;

	switch (parseInt(id)) {

		case 1:
			//BOTONES

			//boton iniciarSesion
//			document.getElementById("").addEventListener('click', login);
			//boton Registrar
//			document.getElementById("").addEventListener('click', registrar);
			break;

		case 2:
			
			document.getElementById("btnLogin2").addEventListener('click', login);
			document.getElementById("btnRegistro2").addEventListener('click', registrar);
			break;


	}
};


//FUNCTION

//funcion login
function login() {

	var email = document.getElementById("email").value,
		pass = document.getElementById("pass").value;

	iniciarSesion(email, pass);
}
//funcion registro
function registrar() {

	var nom = document.getElementById("txtNombre2").value,
		ape = document.getElementById("txtApellidos2").value,
		dn = document.getElementById("txtDNI2").value,
		dir = document.getElementById("txtDir2").value,
		usu = document.getElementById("txtUsuario2").value,
		pass = document.getElementById("txtContraseña2").value;

		registrarPersona(nom, ape, dn, dir, usu, pass);
}

//ref.on('value', function(snapshot) {
//console.log(snapshot.val());
//});
