//Declaro un array de objetos literales sobre indumentaria que se mostrara en Productos
const indumentaria = [
  {
    nombre: "Zapatillas Puma Future Rider De Hombre",
    precio: 27719.0,
    img: "../imagenes/productos/ZapatillasPuma1SinFondo.png",
  },
  {
    nombre: "Zapatillas Suede Classic XXI ADP",
    precio: 29999.0,
    img: "../imagenes/productos/ZapatillaPuma2.png",
  },
  {
    nombre: "Zapatillas Adidas Fast Blue",
    precio: 39999.0,
    img: "../imagenes/productos/ZapatillasAdidas2.png",
  },

  {
    nombre: "Botines FUTURE Z 3.4 Neymar Jr ",
    precio: 25199.0,
    img: "../imagenes/productos/BotinesNeySinFondo.png",
  },
  {
    nombre: "Campera Puma",
    precio: 8399.0,
    img: "../imagenes/productos/CamperaPuma.png",
  },
  {
    nombre: "Remera Argentina entrenamiento",
    precio: 35999.0,
    img: "../imagenes/productos/RemeraArgentina.png",
  },
];

//tomamos el contenedor dinamico
const contenedorDinamico = document.querySelector(".contenedor-dinamico");
const btnSearch = document.querySelector("#btn-search");
const navInput = document.querySelector("#nav-input");
const nav = document.querySelector("#nav");
const btnAbrir = document.querySelector("#btn-abrir");
const btnCerrar = document.querySelector("#btn-cerrar");

//renderizo los elementos html
window.onload = crearHtmlBase();

//creamos una función que cree los objetos
function crearHtmlBase() {
  //primero elimino el contenido html que tenga el contenedor dinamico para que no se acumulen cards en caso de ya haber buscado
  contenedorDinamico.innerHTML = "";
  let html = "";
  //recorro el array de indumentaria para poder obtener los datos y mostrarlos pantalla
  for (let i = 0; i < indumentaria.length; i++) {
    html = `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title text-center">${indumentaria[i].nombre}</h5>
    <div>
      <img
        src="${indumentaria[i].img}"
        class="card-img-top"
        alt="..."
      />
    </div>
    <p class="fw-bold text-center">$${indumentaria[i].precio}</p>
    <div class="text-center">
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</div>`;
    contenedorDinamico.innerHTML += html;
  }
}

//creamos una función que creara un elemento html del objeto encontrado
function crearHtml(objeto) {
  let html = `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title text-center">${objeto.nombre}</h5>
    <div>
      <img
        src="${objeto.img}"
        class="card-img-top"
        alt="..."
      />
    </div>
    <p class="fw-bold text-center">$${objeto.precio}</p>
    <div class="text-center">
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</div>`;
  contenedorDinamico.innerHTML = html;
}

//Busco en el array que se encuentre lo ingresa por el buscador del nav
function buscarIndumentaria(arr, elemento) {
  let encontrado = arr.find((el) => el.nombre.includes(elemento));
  return encontrado;
}
//uso del evento click para que me cree un elemento html
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  //si el buscador esta vacio se mostraran todos los productos, sino se mostra lo introducido
  if (navInput.value != "") {
    let encontrado = buscarIndumentaria(indumentaria, navInput.value);
    crearHtml(encontrado);
  } else {
    crearHtmlBase();
  }
});

//Lógica para el menu hamburguesa
btnAbrir.addEventListener("click", () => {
  nav.classList.add("visible");
});
btnCerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});
