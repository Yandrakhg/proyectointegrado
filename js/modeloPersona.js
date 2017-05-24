const AUTH = firebase.auth();

var newPersona;

AUTH.onAuthStateChanged(function (user) {
	if (user) {
		alert("Funciona");
//		var usu = 'IxXpEcnJRoNEXi70saLNW7tEHXs1';
		var xD = firebase.database().ref('Usuarios/' +  firebase.auth().currentUser.uid + '/nombre');
		xD.on('value', function (snapshot) {
			console.log(snapshot.val());
		});
		insertarPersona(newPersona, AUTH.currentUser.uid);

	}

});

function iniciarSesion(email, pass) {
	AUTH.signInWithEmailAndPassword(email, pass);
	alert(email + " logueado")
}

function cerrarSesion() {
	AUTH.signOut();
}

function getCurrentUser() {
	return AUTH.currentUser.uid;
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

