const opciones = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Este comando imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Este comando crea un archivo de la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = { argv }