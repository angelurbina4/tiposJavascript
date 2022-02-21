var num = 1;
var numFlotante = 1.5;
var text = "Esta es una variable texto";
var bool = false; /*true or false*/


// console.log(num);
// console.log(numFlotante);
// console.log(text);
// console.log(bool);

// var despues;
// console.log(despues);

// despues = 10;
// console.log(despues);

// despues = 20;
// console.log(despues);

var num1 = 1;
var num2 = 2;
var suma = num1+num2;
console.log(suma);

var nombre = "Angel";
var mensaje = "Mi nombre es: ";
var mensajeCompleto = mensaje + nombre;
console.log(mensajeCompleto);

console.log(num1 + nombre);
console.log(num1+num2+nombre);

var orden = 10 + 20 / 6; // PRIMERO (EN PARENTESIS); SEGUNDO DIVISION Y MULTIPLICACION; TERCERO SUMA Y RESTA
console.log(orden);

var n = 13;
n += 3;
console.log(n);

var nom = "Angel ";
console.log(nom);
nom += "Urbina";
console.log(nom);

var edad = 15;
if(edad > 17) {
  console.log("Puede entrar al sitio")
} else {
  console.log("Cierra la ventana")
}

var num1 = 1;
var num2 = 2;
if(num1 === num2) { // a === b; a !== b; a < b; a <= b;... 
  console.log("Los numeros son iguales");
} else {
  console.log("Los numeros son distintos");
}

var n = 13;
if(n>=15) {
  console.log("Num mayor a 15")
} else if(n <= 5) {
  console.log("Num menor a 5")
} else {
  console.log("Num entre 5 y 15")
}

var temperatura = 20;
var estaLloviendo = true;

if(temperatura >=18) {
  if(!estaLloviendo) {
    console.log("Salir a pasear");
  } else {
    console.log("Si esta lloviendo PERO la temperatura es mayor a 18");
  }
} else {
  console.log("Temperatura es menor a 18")
}

if(temperatura >=18 && !estaLloviendo) { // && es un and, || es un or
  console.log("Salir a pasear")
} else {
  console.log("No salir a pasear")
}

// ITERADOR " FOR "

// for(var i=0; i<3; i++) {
//   console.log(i);
// }

// for(var i=15; i>10; i--) {
//   console.log(i)
// }

// ITERADOR " WHILE "
var x = 1;
while(x <8 ) {
  // console.log(x);
  x+=2;
}

var comienzo = 1;
var terminar = 5;
while(comienzo <= terminar) {
  // console.log(`Comienzo: ${comienzo}; Termino: ${terminar}`);
  comienzo++; //comienzo = comienzo + 1; comienzo +=1;
  terminar--; //terminar = terminar -1; terminar -= 1;
}


var dia1="Lunes";
var dia2="Martes";
var dia3="Miercoles";
var dia4="Jueves";
var dia5="Viernes";

var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves","Viernes"];
var tamanoDiasSemana = diasSemana.length;
for(var i=0; i < tamanoDiasSemana; i++) {
  console.log(`Dia de la semana: ${diasSemana[i]}`)
}

var gastos = [10, 5, 2, 7, 8, 9, 10];
var totalGastos = 0;
for(var i=0; i < gastos.length; i++) {
  console.log(totalGastos);
  totalGastos += gastos[i];
}

console.log(totalGastos);

z