const {crearArchivo} =  require('./class/table')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear()


crearArchivo(argv.m, argv.l, argv.s)
    .then(nombreArchivo => console.log(`${nombreArchivo} ha sido creado`.green))
    .catch(err => console.log(err.code))
