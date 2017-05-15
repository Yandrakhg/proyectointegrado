var dialog = document.getElementsByTagName("dialog");
var txtUsuario = document.getElementById('txtUsuario');
var txtContraseña = document.getElementById('txtContraseña');
var txtUsuarioR = document.getElementById('txtUsuarioR');
var txtContraseñaR = document.getElementById('txtContraseñaR');
var txtNombreUsuario = document.getElementById('txtNombreUsuario');
var txtApellidosUsuario = document.getElementById('txtApellidosUsuario');
var txtDireccionUsuario = document.getElementById('txtDireccionUsuario');
var txtDNIUsuario = document.getElementById('txtDNIUsuario');
var btnLogin = document.getElementById('btnLogin');
var btnRegistro = document.getElementById('btnRegistro');
var registro= firebase.auth();



btnRegistro.addEventListener('click', function() {
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

btnLogin.addEventListener('click', function(txtDNIUsuario) {
    var email = txtUsuario.value;
    var password = txtContraseña.value;
    registro.createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});

//ref.on('value', function(snapshot) {
//console.log(snapshot.val());
//});