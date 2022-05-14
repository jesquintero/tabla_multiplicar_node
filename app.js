// Importando archivos de mi app por medio de desestructuración del objeto exportado en multiplicar
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear() // Limpiar la console

// Una vez importado se debe invocar para que se ejecute, por esto no se veía :)
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

