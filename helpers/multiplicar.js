// Incorporando filesystem
const fs = require('fs')
const colors = require('colors/safe')


const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    let salida = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}${(i <= (hasta - 1))? '\n':''}`
    }

    if (listar) {
        console.log('===========================')
        console.log('  Creando la tabla del:', base)
        console.log('===========================')
        console.log(colors.yellow(salida), '\n')
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `Archivo tabla-${base}.txt`
    } catch (err) {
        return err
    }
}

// Exportando como objeto con "module.exports"
module.exports = {
    crearArchivo,
    colors
}