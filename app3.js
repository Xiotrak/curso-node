const {crearArchivo} = require('./helpers/multiplicar3');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
//console.log( argv );


crearArchivo (argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.yellow, 'creado'.green) )
    .catch( err => console.log(err) );

//node app2 -b 8 -l -h 5
//node app2 -b 8

//node app3 --help