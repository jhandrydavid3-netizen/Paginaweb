let arrayGatos = [];
let editIndex = -1;

const sendResgister = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const peso = document.getElementById("peso").value;
    const edad = document.getElementById("edad").value;
    const color = document.getElementById("color").value;

    // SI ESTAMOS EDITANDO
    if (editIndex !== -1) {
        arrayGatos[editIndex] = { nombre, peso, edad, color };
        editIndex = -1;
        document.querySelector("button[type='submit']").textContent = "Agregar mascota";
    } 
    // SI ESTAMOS AGREGANDO NORMAL
    else {
        arrayGatos.push({ nombre, peso, edad, color });
    }

    // LIMPIAR FORMULARIO
    document.getElementById("nombre").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("color").value = "";

    BuildTable();
};

const BuildTable = () => {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    arrayGatos.forEach((gato, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${gato.nombre}</td>
            <td>${gato.peso}</td>
            <td>${gato.edad}</td>
            <td>${gato.color}</td>
            <td>
                <button onclick="DeleteGato(${index})">Eliminar</button>
                <button onclick="EditGato(${index})">Actualizar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
};

const DeleteGato = (index) => {
    arrayGatos.splice(index, 1);
    BuildTable();
};

const EditGato = (index) => {
    const gato = arrayGatos[index];

    document.getElementById("nombre").value = gato.nombre;
    document.getElementById("peso").value = gato.peso;
    document.getElementById("edad").value = gato.edad;
    document.getElementById("color").value = gato.color;

    document.querySelector("button[type='submit']").textContent = "Guardar cambios";

    editIndex = index;
};

setTimeout(() => {
    BuildTable();
}, 2000);
