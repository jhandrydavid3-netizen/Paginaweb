let usuarios = [];
let editIndex = -1;

const toggleFormulario = () => {
  const form = document.getElementById('formulario');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

const guardarUsuario = (e) => {
  e.preventDefault();
  
  const codigo = document.getElementById('codigo').value;
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;

  if (editIndex !== -1) {
    usuarios[editIndex] = { codigo, nombre, correo, telefono };
    editIndex = -1;
    document.querySelector('.btn-guardar').textContent = 'GUARDAR';
  } else {
    usuarios.push({ codigo, nombre, correo, telefono });
  }

  document.querySelector('form').reset();
  toggleFormulario();
  renderTabla();
};

const renderTabla = () => {
  const tbody = document.getElementById('tabla-usuarios');
  tbody.innerHTML = '';
  
  usuarios.forEach((usuario, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${usuario.codigo}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.correo}</td>
        <td>${usuario.telefono}</td>
        <td>
          <button class="btn-modificar" onclick="editarUsuario(${index})">Modificar</button>
          <button class="btn-eliminar" onclick="eliminarUsuario(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
};

const eliminarUsuario = (index) => {
  usuarios.splice(index, 1);
  renderTabla();
};

const editarUsuario = (index) => {
  const usuario = usuarios[index];
  
  document.getElementById('codigo').value = usuario.codigo;
  document.getElementById('nombre').value = usuario.nombre;
  document.getElementById('correo').value = usuario.correo;
  document.getElementById('telefono').value = usuario.telefono;
  
  document.querySelector('.btn-guardar').textContent = 'ACTUALIZAR';
  document.getElementById('formulario').style.display = 'block';
  editIndex = index;
};

const buscarUsuario = () => {
  const buscar = document.getElementById('buscar').value.toLowerCase();
  const tbody = document.getElementById('tabla-usuarios');
  tbody.innerHTML = '';
  
  const filtrados = usuarios.filter(u => 
    u.nombre.toLowerCase().includes(buscar) || 
    u.correo.toLowerCase().includes(buscar)
  );
  
  filtrados.forEach((usuario, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${usuario.codigo}</td>
        <td>${usuario.nombre}</td>
        <td> <button class="btn-correo">${usuario.correo}</button></td>
        <td>${usuario.telefono}</td>
        <td>
          <button class="btn-modificar" onclick="editarUsuario(${index})">Modificar</button>
          <button class="btn-eliminar" onclick="eliminarUsuario(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
};

renderTabla();