// Importando archivos de mi app por medio de desestructuración del objeto exportado en multiplicar
const { crearArchivo } = require('./helpers/multiplicar')



console.clear() // Limpiar la console

const [, , arg3 = 'base=5'] = process.argv
const [ , base = 5] = arg3.split('=')


// Una vez importado se debe invocar para que se ejecute, por esto no se veía :)
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

