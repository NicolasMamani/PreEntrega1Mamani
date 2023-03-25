// declaración de variables
let nro;
let total = 0;
let totalConTresCuotas = 0;
let totalConSeisCuotas = 0;

//declaración de una función de forma tradicional
function sumarProductos(nro) {
  switch (nro) {
    case 1:
      total += 27719.0;
      return total;
    case 2:
      total += 29999.0;
      return total;
    case 3:
      total += 25199.0;
      return total;
    case 4:
      total += 8399.0;
      return total;
    case 5:
      total += 35999.0;
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
      "Ingrese un número : \n1-Zapatillas Puma Future Rider De Hombre  $27719.00\n2-Zapatillas Suede Classic XXI ADP $29999.00 \n3-Botines FUTURE Z 3.4 Neymar Jr FG/AG ADP $25199.00\n4-Buzo juvenil Essentials $8399.00\n5-Zapatillas adidas Retropy F2 De Hombre $35999.00\n0-Terminar \nTotal : $" +
        total +
        "\nTotal con 3 cuotas : $" +
        totalConTresCuotas +
        "\nTotal con 6 cuotas: $" +
        totalConSeisCuotas
    )
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
