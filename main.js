
let nombreCompleto = document.getElementById("nombreCompleto");
let email = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let confirmarContraseña = document.getElementById("confirmarContraseña");
let form = document.querySelector("form");
let mensaje = document.querySelector(".mensaje");
form.appendChild(mensaje);
let botonModoOscuro = document.querySelector(".botonModoOscuro");

botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
});

nombreCompleto.addEventListener("input", () => verificarNombre());
email.addEventListener("input", () => verificarEmail());
contraseña.addEventListener("input", () => verificarContraseña());
confirmarContraseña.addEventListener("input", () => verificarAmbasContraseñas());

function mostrarError(elemento, mensaje) {
    let error = elemento.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
        error = document.createElement("p");
        error.classList.add("error");
        elemento.parentNode.appendChild(error);
    }
    error.textContent = mensaje;
    error.style.color = "red";
}

function limpiarError(elemento) {
    let error = elemento.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.remove();
    }
}

function verificarNombre() {
    if (nombreCompleto.value.length < 3) {
        mostrarError(nombreCompleto, "El nombre debe tener al menos 3 caracteres");
    } else {
        limpiarError(nombreCompleto);
    }
}

function verificarEmail() {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email.value)) {
        mostrarError(email, "Ingrese un email válido");
    } else {
        limpiarError(email);
    }
}

function verificarContraseña() {
    const formatoContraseña = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!formatoContraseña.test(contraseña.value)) {
        mostrarError(contraseña, "Mínimo 8 caracteres, una letra y un número");
    } else {
        limpiarError(contraseña);
    }
}

function verificarAmbasContraseñas() {
    if (confirmarContraseña.value !== contraseña.value) {
        mostrarError(confirmarContraseña, "Las contraseñas no coinciden");
    } else {
        limpiarError(confirmarContraseña);
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    verificarNombre();
    verificarEmail();
    verificarContraseña();
    verificarAmbasContraseñas();

    let errores = document.querySelectorAll(".error");
    if (errores.length === 0) {
        let usuario = {
            nombre: nombreCompleto.value,
            email: email.value,
        };
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        mensaje.textContent = "Registro exitoso";
        mensaje.style.color = "green";
        form.reset();
    } else {
        mensaje.textContent = "Corrige los errores antes de enviar";
        mensaje.style.color = "red";
    }
});