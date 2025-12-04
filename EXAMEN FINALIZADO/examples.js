let estudiantes = [], edit = -1;

const get = id => document.getElementById(id);

function toggleFormulario() {
  const f = get("formulario");
  f.style.display = f.style.display === "block" ? "none" : "block";
}

function limpiar() {
  ["nombre","apellido","materia","nota"].forEach(id => get(id).value = "");
}

function guardarEstudiante() {
  const estudiante = {
    nombre: get("nombre").value,
    apellido: get("apellido").value,
    materia: get("materia").value,
    nota: get("nota").value
  };

  edit === -1 ? estudiantes.push(estudiante) : estudiantes[edit] = estudiante;
  edit = -1;

  limpiar();
  toggleFormulario();
  renderTabla();
}

function renderTabla(lista = estudiantes) {
  get("tabla-estudiantes").innerHTML = lista.map((e,i) => `
    <tr>
      <td>${i+1}</td>
      <td>${e.nombre}</td>
      <td>${e.apellido}</td>
      <td>${e.materia}</td>
      <td> <button>${e.nota}</button</td>
      <td>
        <button class="btn-yellow small" onclick="editar(${i})">Modificar</button>
        <button class="btn-yellow small" onclick="eliminar(${i})">Eliminar</button>
      </td>
    </tr>`).join("");
}

function editar(i) {
  edit = i;
  let e = estudiantes[i];
  get("nombre").value = e.nombre;
  get("apellido").value = e.apellido;
  get("materia").value = e.materia;
  get("nota").value = e.nota;
  get("formulario").style.display = "block";
}

function eliminar(i) {
  estudiantes.splice(i,1);
  renderTabla();
}

function buscarEstudiante() {
  const t = get("buscar").value.toLowerCase();
  const filtrados = estudiantes.filter(e =>
    e.nombre.toLowerCase().includes(t) ||
    e.apellido.toLowerCase().includes(t)
  );
  renderTabla(filtrados);
}

renderTabla();
