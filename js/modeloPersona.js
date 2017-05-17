var newPersona;
const AUTH = firebase.auth();
const ref = firebase.database();

function iniciarSesion(email, contraseña) {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
}

function cerrarSesion() {
	AUTH.signOut();
}

function getCurrentUser(){
	return AUTH.currentUser;	
}

function registrarPersona(dni, nombre, apellidos) {
	AUTH.createUserWithEmailAndPassword(email, password).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	newPersona = newPersona(dni, nom, ape) {
		id: 0,
		this.dni: dni,
		nombre: nom,
		apellidos: ape,
		verificado: false
	};
}

AUTH.onAuthStateChanged(function (user) {
	if (user) {
		if (AUTH.currentUser.displayName == null) {
			AUTH.currentUser.updateProfile({
				displayName: newUser.nombre,
				photoURL: ""
			})
			insertarPersona(newPersona, AUTH.currentUser.uid);
			AUTH.currentUser.sendEmailVerification();
			alert("Funciona");
		}
	}
});
}
