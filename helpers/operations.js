const fs        = require('fs');
require('colors');

const createFileOp = async ( index = 5, LISTAR, TO ) => {
    try {
        let salida = '';
        let consolePrint = '';
        let fileName              = `table-${index}.txt`;
        console.log('========================================'.rainbow);
        console.log(`               TABLA DEL ${index}     `.yellow);
        console.log('========================================'.rainbow);

        for (let i = 1; i <= TO; i++) {
            consolePrint += `${'Multiplicación'.magenta} ${index} ${'x'.yellow} ${i} ${'='.red} ${index*i} \n`.blue;
            salida       += `Multiplicación ${index} x ${i} = ${index*i} \n`;
        }

        fs.writeFileSync( `./out/${fileName}`, salida );
        if (LISTAR) console.log(consolePrint);
        return `Archivo ${ fileName } creado con éxito.`.green;
    } catch (error) {
        throw error;
    }
}

module.exports = {createFileOp};