const AUTH = firebase.auth();
var newPersona;

function iniciarSesion(email, pass) {
	firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
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

function registrarPersona(dn, nombre, apellidos) {
	AUTH.createUserWithEmailAndPassword(email, pass).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	newPersona={
		id: 0,
		dni: dn,
		nombre: nom,
		apellidos: ape,
		verificado: false
	};
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
