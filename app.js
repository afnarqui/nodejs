
var fs = require('fs')

/*
utilizando el módulo fs de node para explicar los metodos async 
devuelve una representación del archivo 
datos esta en una representación de tipo buffer y es un archivo no leible por un ser humano
*/
let datos = fs.readFileSync('index.html')

console.log(datos.toString())

console.log('esto es un mensaje')

