// let kilometrosEntreCiudades = 20
// let velocidadPromedio = 80

// let resultado = kilometrosEntreCiudades / velocidadPromedio
// console.log(resultado +" horas para llegar a una velocidad de "+ velocidadPromedio+ " k/h " + "entre dos ciudades que tienen " + kilometrosEntreCiudades+ " kilometros entre ellas")

// let num1 = 5
// let num2 = 7
// let num3 = 7

// let resultado = (num1+num2+num3)/3

// console.log(resultado)

// let m2Totales = 100
// let m2Cubiertos = 30
// let m2Descubiertos = m2Totales - m2Cubiertos

// let porcentajeM2Cubiertos = (m2Cubiertos * 100) / m2Totales

// let porcentajeM2Descubierto = (m2Descubiertos * 100) /m2Totales

// console.log = (porcentajeM2Cubiertos)
// console.log = (porcentajeM2Descubierto)

// let valorTotal = 14700
// let descuento = (valorTotal * 15) / 100
// let resultado = valorTotal - descuento
// console.log(resultado)
// console.log("El descuento son: " + descuento)

//Solucion de maxiPrograma
// let valorTotal = 14700
// let descuento = valorTotal * 0.85
// console.log (descuento)

// problema 9
// let alumnos = 24
// let alumnas = 14

// let total = alumnos + alumnas
// let porcentajeVarones = (alumnos * 100)/total
// let porcentajeMujeres = (alumnas * 100)/total

// console.log("En el curso son: " + porcentajeVarones + " % de alumnos varones"+ " y "+ porcentajeMujeres +" % de alumnas mujeres")

//Problema 10

// let num1 = 2
// let num2 = 3

// let suma = num1 * num2;
// let resta = num1 - num2;
// let multiplicacion = num1 * num2;
// let division = num1 / num2;

// console.log("la suma de los numeros da : "+suma + ". la resta de los numeros da: "+resta +". la multiplicacion de los numeros da: "+ multiplicacion + ". la division de los numeros da: " + division)

//Ejercicios 2 maxi programa
//Problema 1
// const numero = (num) => {
//   if(num < 10){
//     return "el numero es menor que 10"
//   } else {
//     return "el numero es mayor que 10"
//   }
// }

// numero(4)

// problema 2

// function numeros(num1,num2) {
//   if (num1 < num2) {
//     return `El ${num1} es menor`
//       } else if (num1 > num2) {
//           return `El ${num2} es menor`
//       }
// }
// numeros (8,4)

// Problema 3
// numeros = (num1,num2) => {
// return num1 === num2  ? "Los números son iguales"
//                       :  num1 < num2
//                       ? "El número es menor"
//                       : "El número es mayor";

// }
// numeros(1,4)

// Problema 4

// numero = (num) => {
//   return num === 0  ? "El numero es CERO"
//                     : num > 0
//                     ? "El numero es POSITIVO"
//                     : num < 0
//                     ? "El numero es NEGATIVO"
//                     : "Falta un numero"
// }
//   numero(0)

// Problema 5

// numero = (num) => {
//   return num % 2 == 0  ? "El numero es par"
//                        : num % 2 != 0
//                        ?"El numero es impar"
//                        :"No se ingreso ningun numero"
// }

// numero(254865923)

// Problema 6
// descuento = (monto) => {
//   return monto < 1000 ? "No hay DESCUENTO"
//                       : monto >= 1000 && monto < 5000
//                       ?"Hay un DESCUENTO DEL 10%"
//                       : monto >= 5000
//                       ?"Hay un DESCUENTO DEL 18%"
//                       : "ingrese un MONTO"
// }
// descuento(5000)

// Problema 7

// let numeros = (num1,num2,num3,num4) => {
//   return num1 > num2 && num3 && num4 ?`El numero ${num1} es el mayor de los 4`
//                                      : num2 > num3 && num4
//                                      ? `El numero ${num2} es el mayor de los 4`
//                                      : num3 > num4
//                                      ? `El numero ${num3} es el mayor de los 4`
//                                      : `El numero ${num4} es el mayor de los 4`
// }
// numeros(158,241,333,1045)

// Problema 8

// let numeros = (num1,num2,num3,num4) => {
//   return num1 < num2 && num1 < num3 && num1 < num4 ? `El numero ${num1} es el menor de todos los numeros`
//                                      : num2 < num3 && num2 < num4 && num2 < num1
//                                      ? `El numero ${num2} es el menor de todos los numeros`
//                                      : num3 < num4 && num3 < num2 && num3 < num1
//                                      ? `El numero ${num3} es el menor de todos los numeros`
//                                      : `El numero ${num4} es el menor de todos los numeros`

// }
//  numeros(11,12,15,17)

// let numeros = (num1,num2,num3,num4,num5) => {
//   let menor = num1
//   let mayor = num1

//   if (num2 < menor) {
//     menor = num2
//   } else if (num2 > mayor) {
//     mayor = num2
//   }

//   if (num3 < menor) {
//     menor = num3
//   } else if (num3 > mayor) {
//     mayor = num3
//   }

//   if (num3 < menor) {
//     menor = num3
//   } else if (num3 > mayor) {
//     mayor = num3
//   }

//   if (num4 < menor) {
//     menor = num4
//   } else if (num4 > mayor) {
//     mayor = num4
//   }

//   if (num5 < menor) {
//     menor = num5
//   } else if (num5 > mayor) {
//     mayor = num5
//   }

//   console.log("MENOR: ", menor)
//   console.log("MAYOR: ", mayor)
// }

// numeros(325,53,43,24,50)

// pcs = (procesador, ram, memoriaExtendida) => {

//   precioBase = 0

//   switch(procesador) {
//     case 1:
//       switch(ram) {
//         case 1:
//           precioBase = 800;
//           break;

//         case 2:
//           switch (ram) {
//               precioBase = 900
//               break
//           }

//         case 3:
//           switch(ram) {
//               precioBase = 1200
//               break
//           }
//           break
//   }
//     case 2:
//         switch(ram) {
//           case 1:
//           precioBase = 900
//           break;
//           case 2:
//               precioBase = 1000
//                 break;
//           case 3:
//           precioBase = 1400
//           break
//         }

//         break
//     case 3:
//       switch(ram) {
//         case 1 :
//       precioBase = 1000;
//           break;
//         case 2:
//           precioBase = 1400
//           break;
//         case 3:
//           precioBase = 2000
//           break
//       }
//       break
//   }
// }
// if(extenderDisco == true) {
//   precioBase += 300
//   return precioBase
// }
// pcs()

// numeros = (num1,num2,num3,num4) => {
//   if(num1 === num2 && num2 === num3 && num3 === num4){
//     return "Los numeros ingresados son iguales"
//   }

// }
//   numeros(2,2,2,2)

// numeros = (num1, num2, num3) => {
//   let orden = [];

//   if (num1 < num2 && num2 < num3) {
//     orden = [num1, num2, num3];
//   } else if (num1 < num3 && num1 < num2) {
//     orden = [num1, num3, num2];
//   } else if (num2 < num1 && num3 < num1) {
//     orden = [num2, num3, num1];
//   } else if (num2 < num1 && num1 < num3) {
//     orden = [num2, num1, num3];
//   } else if (num3 < num2 && num3 < num1) {
//     orden = [num3, num1, num2];
//   } else if (num3 < num1 && num1 < num2) {
//     orden = [num3, num1, num2];
//   }
//   return orden;
// };

// numeros(4, 3, 1);

// numeros = (num1,num2,num3) => {
//   let suma = num1 + num2
//   let multiplicacion = num2 * num3
//   if (suma > multiplicacion) {
//     console.log(" la suma de los dos primeros es mayor al producto del segundo numero por el tercero")
//   } else {
//     return "El producto es mayor"
//   }
//   console.log(suma)
//   console.log(multiplcacion)
// }

// numeros(33,31,2)

// EJERCICIOS 3 FOR

// let i = 0

// for(let i = 0; i < 10; i++) {
//   console.log (i)
// }

// let numeros = [1, 3, 4, 50, 6, 7, 8, 9, 10];
// let maximo = numeros[0]; // Suponemos que el primer número es el máximo inicialmente

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > maximo) {
//     maximo = numeros[i]; // Actualizamos el máximo si encontramos un número mayor
//   }
// }
// console.log("El valor más alto es:", maximo);




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

// let numero = Number(prompt("Ingrese un numero porfavor"));

// let minimo1 = numero;
// let bandera = 0;

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


// 3er problema


// let num1 = Number(prompt("Ingrese un numero"))


// function par(num) {
//   if (num % 2 == 0) {
//     console.log("Es Par")
//   } else {
//     console.log("Es Impar")
//   }
// }

// let resultado = par(num1)


// 4to Problema

// Falta


// 5To PRoblema

// function pagos(monto, cantidad) {
        
//     let cantidadPagos = monto / cantidad
    
//     return cantidadPagos
    
// }

// for (let i = 1; i <= 10; i++) {

//     const montoVenta = parseFloat(prompt(`Ingrese el monto de la venta ${i}:`));
//     const cantidadPagos = parseInt(prompt(`Ingrese la cantidad de pagos para la venta ${i}:`));

//     const montoPorPago = pagos(montoVenta,cantidadPagos)
    
    
//     console.log(`Venta ${i}:`);
//     console.log(`Cantidad de Pagos: ${cantidadPagos}`);
//     console.log(`Monto por Pago: $${montoPorPago.toFixed(2)}`); // ToFixed se utiliza para poner 2 decimales despues de la coma.
// }

    

// 6to Problema revisar

    // function sumaResta(num1,num2) {
    //     let suma = num1 + num2
    //     num2 = num2 - num1

    //     return suma
    //     } 
    //     let resultado = alert(`La suma y resta de los numero es : `+ sumaResta(55,5) + num2)




// VECTORES
vector = [0]

for(i = 0 ; i <= 4; i++) {
  num = Number(prompt("Ingrese un numero"))
  vector [i] = num
  console.log(vector)

}

acumulador = 0

for (let x = 0; x < 4; x++) {
acumulador += vector[x]
    
}

promedio = acumulador / 4

console.log(`El promedio de los números ingresados es: ${promedio}`);
