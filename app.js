const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


/* console.log("base=>", argv.base);
console.log("limite=>", argv.limite);
 */

let comando = argv._[0];

console.log('El comando es: ', comando);
console.log("base=>", argv.base);
console.log("limite=>", argv.limite);
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'crear':
        crearArchivo(base, limite).then((nombre) => console.log(`El archivo ${nombre.blue.underline} ha sido creado`))
            .catch(err => console.log("Error!", err));
        break;
    case 'listar':
        listarTabla(base, limite);
        /*
        Listar en forma de promesa
        listarTabla(base, limite).then((data) => console.log(data))
            .catch(err => console.log("Error!", err));
            */
        break;
    default:
        console.log(`El comando '${comando}' no es reconocido`);
}