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
			docuemnt.getElementById("").addEventListener('click', login);
			//boton Registrar
			document.getElementById("").addEventListener('click', registrar);
			break;

		case 2:
			
			docuemnt.getElementById("btnLogin").addEventListener('click',login);
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

btnRegistro.addEventListener('click', function () {
	var nombre = txtNombreUsuario.value;
	var apellidos = txtApellidosUsuario.value;
	var dir = txtDireccionUsuario.value;
	var usu = txtUsuarioR.value;
	var pass = txtContraseñaR.value;

	firebase.database().ref('Usuarios').push({
		Nombre: nombre,
		Apellidos: apellidos,
		Direccion: dir,
		DNI: dni,
		Usuario: usu,
		Contraseña: pass
	});
});

btnLogin.addEventListener('click', function (txtDNIUsuario) {
	var email = txtUsuario.value;
	var password = txtContraseña.value;
	registro.createUserWithEmailAndPassword(email, password).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
});

//ref.on('value', function(snapshot) {
//console.log(snapshot.val());
//});
