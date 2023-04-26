//Carga de imagenes
const backgrounds = [
  "tienda1.jpg",
  "tienda2.jpg",
  "tienda3.jpg",
  "tienda4.jpg",
];
const imagenBg = document.querySelector(".design__img");
console.log(imagenBg);

const elegirFondo = (fondos) => {
  let nroRandom = Math.floor(Math.random() * fondos.length);
  imagenBg.setAttribute("src", `../imagenes/${backgrounds[nroRandom]}`);
};
window.onload = elegirFondo(backgrounds);

//Declaración de variables
const nombre = document.querySelector("#nombre"),
  email = document.querySelector("#email"),
  contraseña = document.querySelector("#contraseña"),
  telefono = document.querySelector("#telefono"),
  formRegistro = document.querySelector("#form-registro");

//captura de usuarios del local storage  "
//hago uso del operador or
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//función para guardar usuario
function guardarUsuario(arr, usuario) {
  arr.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(arr));
}

//evento submit
formRegistro.addEventListener("submit", (e) => {
  //Lo primero que hago es previr el guardado automatico
  e.preventDefault();
  //creo un objeto y usando la interpolación logro guardar sus valores
  const nuevoUsuario = {
    nombre: `${nombre.value}`,
    email: `${email.value}`,
    contraseña: `${contraseña.value}`,
    telefono: `${telefono.value}`,
  };
  guardarUsuario(usuarios, nuevoUsuario);
  //reinicio el formulario
  formRegistro.reset();
});
