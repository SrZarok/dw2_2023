console.log("------ACTIVIDAD 04------");
console.log("En el siguiente arreglo denominado 'frutas' tenemos los siguiente elementos:");
frutas = ['naranja', 'pera', 'manzana', 'fresa'];
console.log(frutas);
cambio = frutas.indexOf('manzana');

frutas[cambio] = 'limon';
console.log("Y en este otro arreglo reemplazamos el elemento 'manzana' por otro llamado 'limon'")

console.log(frutas);