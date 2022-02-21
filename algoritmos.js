// var arreglo = [10, 2, 4, 5, 6];

// function sumatoria(arreglo) {
//   var sumatoria_arreglo = 0;
//   for (var i=0; i<arreglo.length; i++) {
//     sumatoria_arreglo += arreglo[i];
//   }
//   return sumatoria_arreglo;
// }
// var suma = sumatoria(arreglo)
// console.log(suma);


function numeroMayor(arreglo) {

  var numMayor = arreglo[0];

  for (var i = 0; i<arreglo.length; i++) {
    if (numMayor < arreglo[i]) {
      numMayor = arreglo[i];
    }
  }
  return numMayor
}

var arreglo = [10, -1, -5, 11]
var mayor = numeroMayor(arreglo)
console.log(mayor)