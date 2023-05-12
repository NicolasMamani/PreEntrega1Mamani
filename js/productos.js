//Consumiendo con fetch el JSON de nuestra data
fetch("../data/data.json")
  .then((res) => res.json())
  .then((data) => {
    let indumentaria = data;
    window.onload = crearHtmlBase(indumentaria);
    mostarCarrito();
  });

//Declaro un array de objetos literales sobre indumentaria que se mostrara en Productos
/* const indumentaria = [
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
console.log("Indumentaria -> " + indumentaria); */

//tomamos el contenedor dinamico
const contenedorDinamico = document.querySelector(".contenedor-dinamico");
const btnSearch = document.querySelector("#btn-search");
const navInput = document.querySelector("#nav-input");
const nav = document.querySelector("#nav");
const btnAbrir = document.querySelector("#btn-abrir");
const btnCerrar = document.querySelector("#btn-cerrar");

//renderizo los elementos html
/* window.onload = crearHtmlBase(); */

//creamos una función que cree los objetos
function crearHtmlBase(indumentaria) {
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
      <a href="#" class="btn btn-primary btn-comprar">Comprar</a>
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
      <a href="#" class="btn btn-primary btn-comprar">Comprar</a>
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
  fetch("../data/data.json")
    .then((res) => res.json())
    .then((data) => {
      let indumentaria = data;
      //si el buscador esta vacio se mostraran todos los productos, sino se mostra lo introducido
      if (navInput.value != "") {
        let encontrado = buscarIndumentaria(indumentaria, navInput.value);
        crearHtml(encontrado);
      } else {
        crearHtmlBase(indumentaria);
      }
    });
});

//Lógica para el menu hamburguesa
btnAbrir.addEventListener("click", () => {
  nav.classList.add("visible");
});
btnCerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

/* Ahora voy a trabajar con el carrito */
const btnCarrito = document.querySelector(".container-icon");
const contenedorCarrito = document.querySelector(".container-icon__products");
btnCarrito.addEventListener("click", () => {
  contenedorCarrito.classList.toggle("hidden-cart");
});

//obtengo todos los productos
const productsList = document.querySelector(".contenedor-dinamico");

//variable donde guardare todos los productos que el usuario seleccione
let allProducts = JSON.parse(localStorage.getItem("productos")) || [];

//variables para trabajar con el total y el contador
const valorTotal = document.querySelector(".total-pagar");
const contadorProductos = document.querySelector(".count-product");

//variable que se usa para los productos del LocalStorage
const productosLocalStorage =
  JSON.parse(localStorage.getItem("productos")) || [];

productsList.addEventListener("click", (e) => {
  //usando la libreria Toastify

  //Lógica del botón
  if (e.target.classList.contains("btn-comprar")) {
    //le pongo el prevent default porque sino por cada click sube arriba de todo
    e.preventDefault();
    //obtengo el producto obteniendo el padre del padre del botón
    const producto = e.target.parentElement.parentElement;
    //guardo la info del producto en un objeto
    const infoProducto = {
      cantidad: 1,
      nombre: producto.querySelector("h5").textContent,
      precio: producto.querySelector("p").textContent,
    };

    console.log(infoProducto);

    //ahora vamos a ver si el producto ya se sumo previamente o es la primera vez
    const existe = allProducts.some(
      (element) => element.nombre === infoProducto.nombre
    );
    if (existe) {
      //Vamos a crear un array que contenga la cantidad actualizada en caso de ser necesario
      const productos = allProducts.map((element) => {
        if (element.nombre === infoProducto.nombre) {
          element.cantidad++;
          return element;
        } else {
          return element;
        }
      });
      allProducts = [...productos];
    } else {
      //le agregamos el nuevo elemento porque es la primera vez que se selecciona
      allProducts = [...allProducts, infoProducto];
    }
    mostarCarrito();
    //Llamada a libreria Toastify
    Toastify({
      text: "Elemento agregado correctamente",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "black",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});
let rowProduct = document.querySelector(".row-products");

//Función para mostrar el html del carrito de compra
function mostarCarrito() {
  //variables para el total de productos
  let total = 0;
  let totalProductos = 0;
  rowProduct.innerHTML = "";
  console.log(allProducts);
  allProducts.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.innerHTML = `
    <div class="cart-producto">
      <div class="cart-producto__info">
    <span>${producto.cantidad}</span>
    <p id="producto-name">${producto.nombre}</p>
    <span>${producto.precio}</span>
  </div>
  <div class="cart-producto__eliminar" id="btn-eliminar">
    <i class="bi bi-x"></i>
  </div>
</div>
    `;
    rowProduct.append(nuevoProducto);

    //Sumo el total
    total += parseInt(producto.precio.slice(1)) * producto.cantidad;
    totalProductos += producto.cantidad;
    valorTotal.innerHTML = `$${total}`;
    contadorProductos.innerText = totalProductos;
  });
}
//Lógica para eliminar un producto
//Lo de abajo no funciona
rowProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi")) {
    //e.target.classList.contains("btn-comprar")
    e.preventDefault();
    Swal.fire({
      title: "¿Seguro que quiere eliminar el producto?",
      text: "Tu no podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "No, cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "Tu borraste el producto", "success");
        const padreObjetoEliminar = e.target.parentElement.parentElement;
        const objetoEliminar =
          padreObjetoEliminar.querySelector("#producto-name");
        //solo dejo en el array allProducts a todos los objetos con nombre diferente al del que quiero eliminar
        allProducts = allProducts.filter((element) => {
          return element.nombre !== objetoEliminar.innerText;
        });
        //pongo el contador en cero una vez que el largo del array allProducts sea cero
        if (allProducts.length === 0) {
          contadorProductos.innerText = 0;
        }
        mostarCarrito();
      }
    });
  }
});

//Por si el usuario recarga la página
window.addEventListener("beforeunload", (e) => {
  localStorage.setItem("productos", JSON.stringify(allProducts));
});

const btnTerminar = document.querySelector("#btn-terminar");
btnTerminar.addEventListener("click", () => {
  localStorage.removeItem("productos");
  allProducts = [];
  contadorProductos.innerText = 0;
  mostarCarrito();
  Swal.fire({
    icon: "success",
    title: "Comprado con exito",
  });
});
