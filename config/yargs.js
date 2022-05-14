const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            describe: 'Base de la tabla multiplicadora',
            demandOption: true,
            type: 'number'
        },
        'l': {
            alias: 'listar',
            describe: 'Opción de impresióno de la tabla en consola',
            default: false,
            type: 'boolean'
        },
        'h': {
            alis: 'hasta',
            describe: 'Establece un límite a la tabla',
            default: 10,
            type: 'number'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base debe ser un número');
        }
        if (isNaN(argv.h)) {
            throw new Error('El valor de hasta debe ser un número');
        }
        return true
    })
    .argv


// console.log( argv )

module.exports = argv;