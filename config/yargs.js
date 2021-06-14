//Hago toda la configuracion del argumento que necesito enviar
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true, //Hago que sea un dato obligatorio
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: '10',
        describe: 'Muestra la tabla hasta el número que se especifique'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


module.exports = argv;