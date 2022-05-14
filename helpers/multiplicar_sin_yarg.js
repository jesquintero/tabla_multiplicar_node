// Incorporando filesystem
const fs = require('fs')


const crearArchivo = async( base = 5) => {
    let salida = '';

    console.log('===========================')
    console.log(`  Creando la tabla del: ${base}`)
    console.log('===========================')

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}${(i <= 9)? '\n':''}`
    }

    // Forma directa manejando el error con throw
    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;

    //     console.log(`Archivo tabla-${base}.txt creado`)
    // })

    // Forma asincrona, se debe manejar con try y catch
    try {
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `Archivo tabla-${base}.txt`
    } catch (err) {
        return err
    }
}

// Exportando como objeto con "module.exports"
module.exports = {
    crearArchivo
}