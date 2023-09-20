// for (let i = 1; i <= 2; i++) {

//     numeros = Number(prompt("Ingrese un numero aleatorio"))

//     console.log(i)
//     console.log(numeros)
// }

// let pesos = 36500

// let dolar = 730

// let conversion = pesos / dolar

// console.log("El total de PESOS :"+ pesos + " Es igual a :" + conversion + " DOLARES")

// acumulador = 0

// for (let i = 0; i < 3; i++) {

//     // ACA VAN LAS OPERACIONES
//     let nota1 = Number(prompt("Ingrese el valor de las notas"));
//     acumulador = acumulador + nota1

// }

// const promedio = acumulador / 3;

// console.log("La suma de las nota son: " + acumulador);
// console.log("El promedio de las notas son: " + promedio);

// const edades = [5, 8, 9, 6, 7, 15, 99, 48, 84, 12];

// let acumulador = 0

// for (let i = 0; i < edades.length; i++) {
//   const element = edades[i];

//   acumulador = acumulador + edades [i]

// }

// let promedio = acumulador / edades.length

// console.log("El promedio de edad es de: " + promedio)

// let numeros = []
// let maximo = 0

// const cantidadDeNumeros = 10

// for (let i = 0; i < cantidadDeNumeros; i++) {

//   let numero = Number(prompt("Ingrese un numero"));
//   numeros.push(numero);

//   if (numero > maximo) {
//     maximo = numero
//   }
// }
// console.log("El numero se encuentra en la posicion del array numero: "+ numeros.indexOf(maximo))

// console.log("Los números ingresados son:", numeros);
// console.log("El número máximo es:", maximo)

// let numeros = [];
// let positivos = 0
// const cantidadDeNumeros = 6;

// for (let i = 0; i < cantidadDeNumeros; i++) {

//   let numero = Number(prompt("Ingrese un numero"));
//   numeros.push(numero)
//   if (numero > 0) {
//   positivos++
//   }
// }

// console.log("La cantidad de numeros positivos son: "+ positivos)

// let numeros = [];
// let minimo = Infinity;

// const cantidadDeNumeros = 4;

// for (let i = 0; i < cantidadDeNumeros; i++) {

// let numero = Number(prompt("Ingrese un numero"));
// numeros.push(numero);

// if (numero < minimo) {

//   minimo = numero;

//   }
// }
// console.log("El numero minimo es: "+ minimo)

// let edades = []

// let sumaMayorEdad = 0

// for (let i = 0; i < 4; i++) {

//   let edad = Number(prompt("Ingrese un numero"));

//   edades.push(edad);
//   acumulador = edad

//   if (edad > 18) {
//     sumaMayorEdad += edad
//   }
// }
// let cantidadMayores = edades.filter(edad => edad > 18).length;

// if(cantidadMayores > 0) {
//   let promedio = sumaMayorEdad / cantidadMayores
//   console.log("Edades ingresadas:", edades);
//   console.log("Promedio de edades mayores de 18 años:", promedio);
// } else {
//   console.log("Ingrese datos porfavor")
// }

// let numeros = []

// let banderaPar = 0

// let banderaImpar = 0

// for (let i = 0; i < 4; i++) {
//   let numero = Number(prompt("Ingrese un numero"));

//   numeros.push(numero);

//   if(numero % 2 == 0) {
//     banderaPar == 0
//   } else {
//     impar
//   }
// }

// let maximoPar = null; // Variable para almacenar el máximo número par
// let minimoImpar = null; // Variable para almacenar el mínimo número impar

// for (let i = 0; i < 20; i++) {
//   let numero = parseInt(prompt("Ingrese un número"));

//   if (numero % 2 === 0) {
//     // Comprobamos si es par
//     if (maximoPar === null || numero > maximoPar) {
//       maximoPar = numero; // Actualizamos el máximo número par
//     }
//   } else {
//     // Es impar
//     if (minimoImpar === null || numero < minimoImpar) {
//       minimoImpar = numero; // Actualizamos el mínimo número impar
//     }
//   }
// }

// if (maximoPar !== null) {
//   console.log("El máximo número par es: " + maximoPar);
// } else {
//   console.log("No se ingresaron números pares.");
// }

// if (minimoImpar !== null) {
//   console.log("El mínimo número impar es: " + minimoImpar);
// } else {
//   console.log("No se ingresaron números impares.");
// }

// n = Number(prompt("Ingrese un numero"))
// while (n !== 0) {
//   n = Number(prompt("Ingrese un numero"))
//   n++
//   console.log(n)
// }

// let contadorMayores = 0;

// let edad = Number(prompt("Ingrese solo edades mayores a 18 años"))
// while (edad >= 18) {
//   contadorMayores++;
//   edad = Number(prompt("Ingrese solo edades mayores a 18 años"))

// }
// console.log("El número de personas mayores o iguales a 18 años es: " + contadorMayores)

// let numero1 = Number(prompt("ingrese un numero"));
// let numero2 = Number(prompt("ingrese otro numero"));

// let mayor, menor;
// if (numero1 < numero2) {
//   menor = numero1;
//   mayor = numero2;
// } else {
//   mayor = numero1;
//   menor = numero2;
// }

// let contadorEntreNumeros = menor + 1

// while (contadorEntreNumeros < mayor) {
//   console.log(contadorEntreNumeros)
//   contadorEntreNumeros++
// }

// let numeros = 0;
// while (numeros < 100) {
//   numeros += 5
//   console.log(numeros)
// }

// numero = Number(prompt("Escriba un numero"))
// divisor = 1
// contador = 0
// while (divisor <= numero) {
//   if (numero % divisor == 0) {
//     contador++
//   }
//   divisor++
// }

// if (contador == 2) {
//   alert("Es Primo")
// } else {
//   alert ("No es primo")
// }

// console.log(numero)
// console.log(contador)

// let numero = Number(prompt("Ingrese un numero"));

// maximo = numero;
// posicion = 1;
// posicionMaxima = posicion
// while (numero != 0) {
//   if (numero > maximo) {
//     maximo = numero;
//     posicionMaxima = posicion
//   }
//   posicion++
//   numero = Number(prompt("Ingrese un numero"));

//   console.log("El numero ingresado fue: "+ numero);
//   console.log("La posicion del numero ingresado es: "+ posicion);
// }

//Problema 8

// let numero = Number(prompt("Ingrese un numero porfavor"));

// let minimo1 = numero;
// let bandera = false;
// let minimo2 = 0;

// while (numero != 0) {
//   if (numero < minimo1) {
//     minimo2 = minimo1;
//     minimo1 = numero;
//     bandera = true
//   } else if (!bandera) {
//     bandera = true;
//     minimo2 = numero;
//   } else if (numero < minimo2) {
//     minimo2 = numero;
//   }
//   numero = Number(prompt("Ingrese otro numero por favor")); // Lee un nuevo número
// }

// console.log("El número más pequeño es:", minimo1);
// console.log("El segundo número más pequeño es:", minimo2);

//Problema 9

// let numero = Number(prompt("Ingrese un numero porfavor"));

// let minimo1 = numero;
// let bandera = 0;
// let minimo2 = 0;
// let posicion = 1
// let posicion1 = posicion

// while (numero != 0) {
//   if (numero < minimo1) {
//     minimo2 = minimo1;
//     minimo1 = numero;
//     posicion2 = posicion1;
//     posicion1 = posicion
//     bandera = 1
//   } else if (!bandera) {
//     minimo2 = numero;
//     bandera = 1;
//     posicion2 = posicion
//   } else if (numero < minimo2) {
//     minimo2 = numero;
//     posicion2 = posicion
//   }
//   numero = Number(prompt("Ingrese otro numero por favor")); // Lee un nuevo número
//   posicion++
// }

// console.log("El número más pequeño es:", minimo1);
// console.log("El segundo número más pequeño es:", minimo2);
// console.log("la posicion del numero mas pequeño es:"+ posicion1);
// console.log("la posicion del segundo numero mas pequeño es:"+ posicion2);

//Problema 10

// let numero = Number(prompt("Ingrese un numero"))
// banderaPositivo = 0
// banderaNegativo = 0

// while (numero != 0) {
// if (numero > 0) {

//     if (banderaPositivo == 0) {
//         minimoPositivo = numero
//         banderaPositivo = 1
//     } else if (numero < minimoPositivo) {
//         minimoPositivo = numero
//     }

// } else {
//     if (banderaNegativo == 0) {
//         maximoNegativo = numero
//         banderaNegativo = 1
//     } else if
//         (numero > maximoNegativo) {
//              maximoNegativo = numero
//         }
// }
// numero = Number(prompt("Ingrese un numero"))
// }

// console.log(minimoPositivo)
// console.log(maximoNegativo)

// Ejercicios con funciones max

// let num1 = Number(prompt("Ingrese un numero"))
// let num2 = Number(prompt("Ingrese otro numero"))

// function producto(num1,num2) {
//     let result = num1 * num2
//     return result
// }

// let resultado = producto(num1,num2)

// console.log(resultado)

// let montoVendido = Number(prompt("Monto vendido"));
// let productoVendido = Number(prompt("Precio producto"));

// montoTotal = (monto, precio) => {
//   let resultado = montoVendido * productoVendido;
//   return resultado;
// };
// let resultado = montoTotal(montoVendido, productoVendido);

// console.log(resultado);


//2do Problema

// let num1 = Number(prompt("Ingrese numero"))
// let num2 = Number(prompt("Ingrese otro numero"))

// function mayor(num1,num2) {  
//   if (num1 > num2) {
//     console.log(num1)
//   } else if (num2 > num1) 
//     {
//       console.log(num2)
//   } else {
//     console.log(0)
//   }
// }

// let resultado = mayor(num1,num2)

// console.log(resultado)

// let num1 = Number(prompt("Ingrese un numero"))


// function par(num) {
//   if (num % 2 == 0) {
//     console.log("Es Par")
//   } else {
//     console.log("Es Impar")
//   }
// }

// let resultado = par(num1)







