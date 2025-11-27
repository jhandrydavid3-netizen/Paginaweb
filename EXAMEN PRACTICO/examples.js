// Datos
let students = JSON.parse(localStorage.getItem('students')) || [];
let isEditing = false;
let currentStudentId = null;

// Guardar en localStorage
function saveToLocalStorage() {
  localStorage.setItem('students', JSON.stringify(students));
}

// Mostrar estudiantes
function displayStudents(studentsToShow = students) {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  studentsToShow.forEach((student, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.codigo}</td>
      <td>${student.nombre}</td>
      <td>${student.correo}</td>
      <td>${student.telefono}</td>
      <td>${student.materia}</td>
      <td>${student.nota}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editStudent('${student.id}')">Modificar</button>
        <button class="action-btn delete-btn" onclick="deleteStudent('${student.id}')">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Manejar envío del formulario
function handleSubmit(event) {
  event.preventDefault();
  
  const student = {
    id: isEditing ? currentStudentId : Date.now().toString(),
    codigo: document.getElementById('codigo').value,
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('correo').value,
    telefono: document.getElementById('telefono').value,
    materia: document.getElementById('materia').value,
    nota: parseFloat(document.getElementById('nota').value)
  };

  if (isEditing) {
    const index = students.findIndex(s => s.id === currentStudentId);
    if (index !== -1) students[index] = student;
    cancelEdit();
  } else {
    students.push(student);
  }

  saveToLocalStorage();
  displayStudents();
  event.target.reset();
}

// Editar estudiante
function editStudent(id) {
  const student = students.find(s => s.id === id);
  if (student) {
    isEditing = true;
    currentStudentId = id;
    
    document.getElementById('studentId').value = student.id;
    document.getElementById('codigo').value = student.codigo;
    document.getElementById('nombre').value = student.nombre;
    document.getElementById('correo').value = student.correo;
    document.getElementById('telefono').value = student.telefono;
    document.getElementById('materia').value = student.materia;
    document.getElementById('nota').value = student.nota;
    
    document.getElementById('submitBtn').textContent = 'Actualizar';
    document.getElementById('cancelBtn').style.display = 'inline-block';
  }
}

// Eliminar estudiante
function deleteStudent(id) {
  if (confirm('¿Eliminar este estudiante?')) {
    students = students.filter(s => s.id !== id);
    saveToLocalStorage();
    displayStudents();
  }
}

// Buscar estudiante
function searchStudent() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filtered = students.filter(s => 
    s.nombre.toLowerCase().includes(searchTerm) || 
    s.codigo.toLowerCase().includes(searchTerm)
  );
  displayStudents(filtered);
}

// Cancelar edición
function cancelEdit() {
  isEditing = false;
  currentStudentId = null;
  document.getElementById('studentForm').reset();
  document.getElementById('submitBtn').textContent = 'Guardar';
  document.getElementById('cancelBtn').style.display = 'none';
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  displayStudents();
  
  // Buscar al presionar Enter
  document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchStudent();
  });
});