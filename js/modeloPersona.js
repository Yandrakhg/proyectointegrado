const AUTH = firebase.auth();
var newPersona;

function iniciarSesion(email, pass) {
	//	const promise = 
	AUTH.signInWithEmailAndPassword(email, pass);
	//	promise.catch(e => console.log(e.message));
	alert(email + " logueado")
}

function cerrarSesion() {
	AUTH.signOut();
}

function getCurrentUser() {
	return AUTH.currentUser;
}

function registrarPersona(dn, nom, ape, dir, usu, pass) {
	AUTH.createUserWithEmailAndPassword(usu, pass).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	newPersona = {
		id: 0,
		dni: dn,
		nombre: nom,
		apellidos: ape,
		direccion: dir,
		usuario: usu,
		password: pass,
		verificado: false
	};
}

function recuperarUsuario() {
	AUTH.onAuthStateChanged(function (user) {
		// User is signed in.
		var user = AUTH.currentUser;
		var uid, dn, nom, ape, dir;
		if (user != null) {
			uid = user.uid;
			dn = user.dni;
			nom = user.nombre;
			ape = user.apellidos;
			dir = user.direccion;

			console.log("id: " + uid);
			console.log("dni: " + dn);
			console.log("nombre: " + nom);
			console.log("apellidos: " + ape);
			console.log("direccion: " + dir);
		} else {
			console.log("Cargando...");
		}
	});
}
AUTH.onAuthStateChanged(function (user) {
	if (user) {
		if (AUTH.currentUser.displayName == null) {
			AUTH.currentUser.updateProfile({
				displayName: newPersona.nombre,
				photoURL: ""
			})
			insertarPersona(newPersona, AUTH.currentUser.uid);
			AUTH.currentUser.sendEmailVerification();
			alert("Funciona");
		}
	}

});
