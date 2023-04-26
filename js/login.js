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
  imagenBg.setAttribute("src", `imagenes/${backgrounds[nroRandom]}`);
};
window.onload = elegirFondo(backgrounds);

//Declaración de variables
const btnIngresar = document.querySelector("#btn-ingresar"),
  inputNombre = document.querySelector("#input-usuario"),
  inputContraseña = document.querySelector("#input-contraseña"),
  usuario = localStorage.getItem("usuarios"),
  mensaje = document.querySelector("#login-mensaje");

//recuperarción de usuario del LocalStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//función que busca el usuario y constraseña
function validarUsuario(usuario, contraseña, listaUsuarios) {
  let valor = listaUsuarios.find(
    (el) => el.nombre == usuario && el.contraseña == contraseña
  );
  return valor;
}

//agrego evento click a btnIngresar
btnIngresar.addEventListener("click", () => {
  let valor = validarUsuario(
    inputNombre.value,
    inputContraseña.value,
    usuarios
  );
  valor
    ? (window.location.href = "./pages/productos.html")
    : (mensaje.innerText = "Usuario no encontrado, por favor registrese");
});
