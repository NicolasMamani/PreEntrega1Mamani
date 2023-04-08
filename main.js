// declaración de variables
let nro;
let total = 0;
let totalConTresCuotas = 0;
let totalConSeisCuotas = 0;
let carritoCompra = [];

//declaración de array de objetos
const indumentaria = [
  {
    nombre: "Zapatillas Puma Future Rider De Hombre",
    precio: 27719.0,
    stock: true,
  },
  {
    nombre: "Zapatillas RUNFALCON 3.0 Adidas",
    precio: 29999.0,
    stock: false,
  },
  {
    nombre: "Zapatillas Suede Classic XXI ADP",
    precio: 29999.0,
    stock: true,
  },
  {
    nombre: "Zapatillas adidas Fast Blue",
    precio: 39999.0,
    stock: false,
  },

  { nombre: "Botines FUTURE Z 3.4 Neymar Jr ", precio: 25199.0, stock: true },
  {
    nombre: "Buzo juvenil Essentials",
    precio: "$8399.00",
    stock: true,
  },
  {
    nombre: "Zapatillas adidas Retropy F2 De Hombre",
    precio: 35999.0,
    stock: true,
  },
];

//Obtengo un nuevo array con solo los productos que tienen stock true
const indumentariaConStock = indumentaria.filter((el) => {
  return el.stock;
});

//declaración de una función de forma tradicional
function sumarProductos(nro) {
  switch (nro) {
    case 1:
      total += indumentariaConStock[0].precio;
      return total;
    case 2:
      total += indumentariaConStock[1].precio;
      return total;
    case 3:
      total += indumentariaConStock[2].precio;
      return total;
    case 4:
      total += indumentariaConStock[3].precio;
      return total;
    case 5:
      total += indumentariaConStock[4].precio;
    default:
      return total;
  }
}

//Declaración de dos funciones flecha
const totalTresCuotas = (total) => {
  return parseInt(total / 3);
};
const totalSeisCuotas = (total) => {
  return parseInt(total / 6);
};
//Uso del ciclo do-while
do {
  nro = parseInt(
    prompt(
      `Ingrese un número: 
      ----------------------------Productos---------------------------------
      1-${indumentariaConStock[0].nombre} $${indumentariaConStock[0].precio}
      2-${indumentariaConStock[1].nombre} $${indumentariaConStock[1].precio}
      3-${indumentariaConStock[2].nombre} $${indumentariaConStock[2].precio}
      4-${indumentariaConStock[3].nombre} $${indumentariaConStock[3].precio}
      5-${indumentariaConStock[4].nombre} $${indumentariaConStock[4].precio}
      0-Terminar
      -----------------------------TOTAL------------------------------------
      Total: $${total}
     
      `
    )
  );

  //estructuras de control para que el número ingresado no sea menor o igual a cero
  if (nro > 0) {
    total = sumarProductos(nro);
  }
  if (nro < 0) {
    alert("Número incorrecto");
  }
} while (nro != 0);

//llamada a las funciones flecha
totalConTresCuotas = totalTresCuotas(total);
totalConSeisCuotas = totalSeisCuotas(total);
alert(`Total: $${total}
Total con 3 cuotas: $${totalConTresCuotas}
Total con 6 cuotas: $${totalConSeisCuotas}`);
