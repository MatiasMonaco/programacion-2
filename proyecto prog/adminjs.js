let registros = JSON.parse(localStorage.getItem('registros1')) || [];
let registroEditandoIndex = null;

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const mail = document.getElementById('mail').value;
    const telefono = document.getElementById('telefono').value;
    const hora = document.getElementById('hora').value;
    const comentarios = document.getElementById('comentarios').value;
  
    const nuevoRegistro = {
      nombre,
      apellido,
      dni,
      mail,
      telefono,
      hora,
      comentarios,
    };
  
    if (registroEditandoIndex !== null) {
      registros[registroEditandoIndex] = nuevoRegistro;
      registroEditandoIndex = null;
    } else {
      registros.push(nuevoRegistro);
    }
  
    document.getElementById('form').reset();
    guardarEnLocalStorage();
    mostrarRegistros();
});

function mostrarRegistros() {
  const listaDatos = document.getElementById('datosGuardados');
  listaDatos.innerHTML = '';

  registros.forEach((registro, index) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML =`
      <strong>${registro.nombre} ${registro.apellido}</strong>
      <div>DNI: ${registro.dni}</div>
      <div>Email: ${registro.mail}</div>
      <div>Teléfono: ${registro.telefono}</div>
      <div>fecha y hora de la reserva: ${registro.hora}</div>
      <div>Sugerencias: ${registro.comentarios}</div>
      <div>
        <button type="button" class="btn btn-primary btn-sm editar" data-index="${index}">Editar</button>
        <button type="button" class="btn btn-danger btn-sm eliminar" data-index="${index}">Eliminar</button>
      </div>
    `;
    listaDatos.appendChild(item);

    item.querySelector('.editar').addEventListener('click', function() {
      editarRegistro(index);
    });

    item.querySelector('.eliminar').addEventListener('click', function() {
      eliminarRegistro(index);
    });
  });
}

function editarRegistro(index) {
    const registroAEditar = registros[index];

    document.getElementById('nombre').value = registroAEditar.nombre;
    document.getElementById('apellido').value = registroAEditar.apellido;
    document.getElementById('dni').value = registroAEditar.dni;
    document.getElementById('mail').value = registroAEditar.mail;
    document.getElementById('telefono').value = registroAEditar.telefono;
    document.getElementById('hora').value = registroAEditar.hora;
    document.getElementById('comentarios').value = registroAEditar.comentarios;

    registroEditandoIndex = index;
}

function guardarEnLocalStorage() {
    localStorage.setItem('registros1', JSON.stringify(registros));
}

document.getElementById('form').addEventListener('submit', function(event) {
    guardarEnLocalStorage();
});

function eliminarRegistro(index) {
    registros.splice(index, 1);
    mostrarRegistros();
}

localStorage.setItem('registros1', JSON.stringify(registros));

function mostrarRegistrosEnOtroArchivo() {
  registros.forEach(registro => {
    console.log(registro.nombre);
    console.log(registro.apellido);
    console.log(registro.dni);
    console.log(registro.mail);
    console.log(registro.telefono);
    console.log(registro.hora);
    console.log(registro.comentarios);
  });
}

mostrarRegistrosEnOtroArchivo();
mostrarRegistros();

function inicio() {
    window.location.href = 'index.html';
}

function CerrarSesion() {
    window.location.href = 'login.html';
}