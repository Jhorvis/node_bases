const fs = require('fs');



const crearArchivo = async(m, l, s) => {
    try {

        let salida = '';
        const nombreArchivo = `./docs/Tabla-del-${m}.txt`;
        for (let index = 1; index <= s; index++) {
            
            salida += `${m} X ${index} = ${m*index}\n` 
        }

        fs.writeFileSync(nombreArchivo, salida);

        if (l){   
            console.log(salida);  
        } 
      return nombreArchivo;
    }
    catch (err){
        throw err
    }
}

module.exports = {
   crearArchivo
}