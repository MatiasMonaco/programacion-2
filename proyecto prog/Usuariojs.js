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

  
  mostrarRegistros();
});


function mostrarRegistros() {
  const listaDatos = document.getElementById('datosGuardados');
  listaDatos.innerHTML = '';

  registros.forEach((registro, index) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML = `
      <strong>${registro.nombre} ${registro.apellido}</strong>
      <div>DNI: ${registro.dni}</div>
      <div>Email: ${registro.mail}</div>
      <div>Teléfono: ${registro.telefono}</div>
      <div>fecha y hore de la reserva: ${registro.hora}</div>
      <div>Sugerencias: ${registro.comentarios}</div>
      <div>
       
        <button type="button" class="btn btn-danger btn-sm eliminar" data-index="${index}">Cancelar</button>
      </div>
    `;
    const cancelarBtn = item.querySelector('.eliminar');
    cancelarBtn.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      eliminarRegistro(index);
      mostrarRegistros(); 
      guardarRegistrosEnLocalStorage(); 
    });

    listaDatos.appendChild(item);
  });
}

function eliminarRegistro(index) {
  registros.splice(index, 1); 
}
function guardarRegistrosEnLocalStorage() {
  localStorage.setItem('registros1', JSON.stringify(registros));
}
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  guardarRegistrosEnLocalStorage();
});

mostrarRegistros();

function CerrarSesion() {
    window.location.href = 'index.html';
}

