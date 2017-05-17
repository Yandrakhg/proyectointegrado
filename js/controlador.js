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
			document.getElementById("").addEventListener('click', login);
			//boton Registrar
			document.getElementById("").addEventListener('click', registrar);
			break;

		case 2:
			
			document.getElementById("btnLogin2").addEventListener('click',login);
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
//	var....,
//	....,

	registrarPersona(1, 2, 3);
}

//ref.on('value', function(snapshot) {
//console.log(snapshot.val());
//});
