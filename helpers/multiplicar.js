const fs = require('fs');
const colors = require('colors');

//Creo una funcion async para que retorne una promesa. Y levantar con el Then y Catch en el APP
//Importante, hacer un async siempre va de la mano del try catch para levantar errores.
const crearArchivo = async (base, listar = false, hasta = 10) => {

    try {
        if(listar){
            console.log("======================".red);
            console.log('     TABLA del ', `${base}`.green, ':     ');
            console.log("======================".red);
        }
        let salida = '';
        let consola = '';
    
        for (let index = 1; index <= hasta; index++) {
            resultado = base * index;

            salida += `${base} x ${index} = ${resultado} \n`;
            consola += `${base} ${ 'x'.green } ${index} ${ '='.green} ${resultado} \n`;
        }
        
        listar && console.log(consola);

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}