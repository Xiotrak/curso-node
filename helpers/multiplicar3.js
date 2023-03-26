const fs = require('fs');

const crearArchivo = (base, listar, hasta, callback) => {

    try{
        return new Promise( ( resolve, reject ) => {
            let salida = '';
            let nombreArchivo='';
    
            for (let number = 1; number <= hasta; number+=1) {
                salida += `${base} x ${number} = ${base * number}\n`;
            }
            
            if (listar){
                console.log(salida);
            }
            
    
            fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
            nombreArchivo =`Tabla-${base}.txt`;
    
            resolve(nombreArchivo);
    
        });
    }catch(err){
        throw err;
    }
}


module.exports = {
    crearArchivo
}