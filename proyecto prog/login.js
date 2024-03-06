function redireccionar() {
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;

    if (usuario === '' || contraseña === '') {
        alert('Por favor, completa todos los campos');
    } 
    else {
        var usuarioRegistrado = localStorage.getItem('usuarioRegistrado');
        var contraseñaRegistrada = localStorage.getItem('contraseñaRegistrada');

        if (usuario === 'adm' && contraseña === 'adm') {
            localStorage.setItem('usuarioActual', usuario);
            window.location.href = 'admin.html';
        } 
        else if (usuario != usuarioRegistrado || contraseña != contraseñaRegistrada) {
            alert('usuario o contraseña no validos')
        }

        else if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
            localStorage.setItem('usuarioActual', usuario);
            window.location.href = 'index.html';
        }
    }
}

function mostrarRegistro() {
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('formRegistro').style.display = 'block';
}

function registrarse() {
    var nombreRegistro = document.getElementById('nombreRegistro').value;
    var usuarioRegistro = document.getElementById('usuarioRegistro').value;
    var contraseñaRegistro = document.getElementById('contraseñaRegistro').value;
    var confirmarContraseña = document.getElementById('confirmarContraseña').value;

    if (nombreRegistro === '' || usuarioRegistro === '' || contraseñaRegistro === '' || confirmarContraseña === '') {
        alert('Por favor, completa todos los campos');
    }
     else {
        if (contraseñaRegistro !== confirmarContraseña) {
            alert('Las contraseñas no coinciden');
        } else {
            localStorage.setItem('usuarioRegistrado', usuarioRegistro);
            localStorage.setItem('contraseñaRegistrada', contraseñaRegistro);
            alert('te has registrado');
        }
    }
}

function atras(){
    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('form-login').style.display = 'block';   
}