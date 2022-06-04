alert ("Buenos días")
var arreglo = [1, 2, 3, 4, 5]
console.log(arreglo);

arreglo.unshift("elemento") //Agregar elementos al incio
console.log(arreglo);
console.log(arreglo.length);//Muestra el tamaño del arreglo

var num1 = 5;
var num2 = 3;
var num3 = num1;

num3=100;
console.log(num3+num1);
console.log(num2);

var arreglo1 = [1, 2, 3];
var arreglo2 = arreglo1;
console.log(arreglo2);
arreglo2.push(4); //agrega un valor al arreglo
console.log(arreglo2);
console.log(arreglo1);

arreglo.forEach(function(elemento, indice){
    console.log(elemento, indice);
})

arre = [4, 8, 6, 2, 6, 7, 9, 3, 7, 5]
console.log(arre);
arre.sort(function (elemento1, elemento2){
    return elemento1 - elemento2;
    
});

console.log(arre);

const arregloFiltrado = arre.filter(function (elemento, indice){
    return !(elemento % 2 == 0)
})

console.log(arregloFiltrado);


//Ejercicio Guiado 

function promedio (arregloCalificaciones){
   var suma = arregloCalificaciones.reduce(function (acumulador, elemento){
        return acumulador + elemento;
    },
    0
    );

    var promedio = suma / arregloCalificaciones.length

    if(promedio<31){
        return 'Promedio: '+ promedio + '. Muy deficiente';

    } else if(promedio < 51){
        return 'Promedio: '+ promedio + '. Deficiente';

    }else if(promedio < 61 ){
    return 'Promedio: '+ promedio + '. Suficiente';
    } else if (promedio < 71) {
        return 'Promedio: ' + promedio + '. Bien...';
        } else if (promedio < 91) {
        return 'Promedio: ' + promedio + '. Notable...';
        } else {
        return 'Promedio: ' + promedio + '. Sobresaliente...';
        }
    return arregloCalificaciones;

  
}
const calificaciones = [80, 75, 90, 65, 66]
console.log (promedio(calificaciones));






