const colors = require('colors');
const argv = require('yargs') 
.option('m', {
    alias: 'multiplicador',
    demandOption: true,
    default: 1,
    describe: 'multiplicador de tabla',
    type: 'number'
})
.option('l', {
    alias: 'listar',
    describe: 'Lista en consola resultado de la tabla',
    demandOption: true,
    default: false,
    type: 'boolean'
})
.option('s', {
    alias: 'size',
    describe: 'Define el tamaño de la tabla',
    demandOption: true,
    default: 10,
    type: 'number'
})
.check((argv, options) => {

    if (isNaN(argv.m)){
        throw `Error El multiplicador debe ser un numero`.brightRed
    }

    if (isNaN(argv.s)){
        throw `Error el tamaño debe ser un numero`.brightRed
    }

    if (argv.s > 100){
        throw `Error el tamaño debe ser menor que 100`.brightRed
    }

    return true;

})
.argv;

module.exports = argv;