const AUTH = firebase.auth();
var newPersona;

function iniciarSesion(email, pass) {
//	const promise = 
	AUTH.signInWithEmailAndPassword(email, pass);
//	promise.catch(e => console.log(e.message));
	alert(email+" registrado")
}
	

function cerrarSesion() {
	AUTH.signOut();
}

function getCurrentUser(){
	return AUTH.currentUser;	
}

function registrarPersona(dn, nom, ape, dir, usu, pass) {
	AUTH.createUserWithEmailAndPassword(usu, pass).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	newPersona={
		id: 0,
		dni: dn,
		nombre: nom,
		apellidos: ape,
		direccion: dir, 
		usuario:usu,
		password: pass,
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
