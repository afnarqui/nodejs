
var fs = require('fs')

/*
utilizando el módulo fs de node para explicar los metodos async 
devuelve una representación del archivo 
datos esta en una representación de tipo buffer y es un archivo no leible por un ser humano

las funciones sincrónicas lo que hacen es bloquear el proceso hasta que la función termine de
conseguir el archivo en el disco rigido y lo devuelva en la variable datos
a hoy todos los lenguajes de programación funcionan así. pero nodejs no

ejecutando el archivo de forma asíncrona
callback ()=>{} es una función que se va a ejecutar cuando el archivo se termine de leer 
readFile le pasa al callback el contenido del archivo
*/
fs.readFile('index.html',(err,data)=>{
    if(err){
        return console.log(`Se presento un error al leer el archivo : ${err}`)
    }
    console.log(data.toString().length)    
})

console.log('esto es un mensaje')

