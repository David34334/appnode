const argv = require('yargs')
            .option('b', {
                alias       : 'base',
                type        : 'number',
                describe    : 'Base of multiplication',
                demandOption: true
            })
            .option('l', {
                alias   : 'listar',
                type    : 'boolean',
                describe: 'Show table in console',
                default : false
            })
            .option('t', {
                alias   : 'to',
                type    : 'number',
                default : 10,
                describe: 'Number of iterations for multiplication (Ej: 1...10, 1....20)'
            })
            .check((argv, options) => {
                if (isNaN( argv.b )) {
                    throw 'La base debe ser un número.';
                }
                if (isNaN( argv.t )) {
                    throw "El 'TO' debe ser un número";
                }
                return true;
            })
            .argv;

module.exports = { argv }