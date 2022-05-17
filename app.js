const { createFileOp }  = require('./helpers/operations');
const { argv }          = require('./config/yargs');

console.clear();

const BASE_NUMBER   = argv.b;
const LISTAR        = argv.l;
const TO            = argv.t;

createFileOp( BASE_NUMBER, LISTAR, TO )
    .then( fileName => console.log( fileName ))
    .catch( err => console.log(err) );