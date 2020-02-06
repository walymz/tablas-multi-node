// Requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Error: El valor introducido '${ base }', no es un número`);
            //return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base} x ${i} = ${res}\n`;
        }

        fs.writeFile(`tablas/tabla-${base} al ${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
                //return
            } else {
                resolve(`tablas/tabla-${base} al ${limite}.txt`);
            }
        });

    })

}

let listarTabla = (base, limite = 10) => {
        if (!Number(base)) {
            console.log(`Error: El valor introducido '${ base }', no es un número`);
            return;
        }
        let data = '';
        console.log('===================================================='.blue);
        console.log(`Tabla de multiplicar del ${base}, de 1 al ${limite}.`.blue);
        console.log('==================================================='.blue);
        for (let i = 1; i <= limite; i++) {
            let res = base * i;
            data += `${base} x ${i} = ${res}\n`;
        }
        console.log(data);

    }
    /*
    listarTabla en forma de promesa

    let listarTabla = (base, limite) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`Error: El valor introducido '${ base }', no es un número`);
                //return;
            }
            let data = '';
            for (let i = 1; i <= limite; i++) {
                let res = base * i;
                data += `${base} x ${i} = ${res}\n`;
            }
            resolve(data);
        })

    }
    */
module.exports = { crearArchivo, listarTabla }
    /**
     * Es igual que decir crearArchivo: crearArchivo
     */