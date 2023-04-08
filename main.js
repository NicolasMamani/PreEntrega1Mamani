// declaración de variables
let nro;
let total = 0;
let totalConTresCuotas = 0;
let totalConSeisCuotas = 0;

// \\n0-Terminar \nTotal : $" +

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
console.log(indumentariaConStock);

//declaración de una función de forma tradicional
function sumarProductos(nro) {
  switch (nro) {
    case 1:
      total += indumentaria[0].precio;
      return total;
    case 2:
      total += indumentaria[1].precio;
      return total;
    case 3:
      total += indumentaria[2].precio;
      return total;
    case 4:
      total += indumentaria[3].precio;
      return total;
    case 5:
      total += indumentaria[4].precio;
    default:
      return total;
  }
}

//Declración de dos funciones flecha
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
      1-${indumentaria[0].nombre} $${indumentaria[0].precio}
      2-${indumentaria[1].nombre} $${indumentaria[1].precio}
      3-${indumentaria[2].nombre} $${indumentaria[2].precio}
      4-${indumentaria[3].nombre} $${indumentaria[3].precio}
      5-${indumentaria[4].nombre} $${indumentaria[4].precio}
      Total: $${total}
      Total con 3 cuotas: $${totalConTresCuotas}
      Total con 6 cuotas: $${totalConSeisCuotas}
      `
    )

    // prompt(
    //   "Ingrese un número : \n1-Zapatillas Puma Future Rider De Hombre  $27719.00\n2-Zapatillas Suede Classic XXI ADP $29999.00 \n3-Botines FUTURE Z 3.4 Neymar Jr FG/AG ADP $25199.00\n4-Buzo juvenil Essentials $8399.00\n5-Zapatillas adidas Retropy F2 De Hombre $35999.00\n0-Terminar \nTotal : $" +
    //     total +
    //     "\nTotal con 3 cuotas : $" +
    //     totalConTresCuotas +
    //     "\nTotal con 6 cuotas: $" +
    //     totalConSeisCuotas
    // )
  );
  //estructuras de control para que el número ingresado no sea menor o igual a cero
  if (nro > 0) {
    total = sumarProductos(nro);
  }
  if (nro < 0) {
    alert("Número incorrecto");
  }
  //llamada a las funciones flecha
  totalConTresCuotas = totalTresCuotas(total);
  totalConSeisCuotas = totalSeisCuotas(total);
} while (nro != 0);
