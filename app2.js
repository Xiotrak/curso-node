const {crearArchivo} = require('./helpers/multiplicar2');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false
                })
                .check( (argv,options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

console.clear();

//console.log(process.argv);
console.log( argv );


crearArchivo (argv.b, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );

//node app2 -b 8 -l