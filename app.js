
const fs = require('fs');
const { callbackify } = require('util');

console.clear(); //LIMPIA LA CONSOLA DE EJECUCION

const base = 2;
let salida = '';

console.log('======================');
console.log(`     TABLA DEL ${base}`);
console.log('======================');

for (let number = 1; number <= 10; number+=1) {
    salida += `${base} x ${number} = ${base * number}\n`;
} 

/*
fs.writeFile( `Tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log(`Tabla-${base}.txt creado`);
} )
*/
fs.writeFileSync(`Tabla-${base}.txt`, salida);
console.log(`Tabla-${base}.txt creado`);



//PACKAGE.JSON SE CREA CON "npm init"