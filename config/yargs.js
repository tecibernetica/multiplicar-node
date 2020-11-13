const opts ={
     base: {
             demand: true,
             alias: 'b',
        },
        limite:{
            alias:'l',
            default:10//esto lo pongo por si la persona no pone nada
        }
    }




const argv = require('yargs')
                //con command ponemos la ayuda a la oocion litar, del programa en consola
                .command('listar','Imprime en Consola la tabla de Multiplicar',opts)
                 
                .command('crear','Genera un archivo con la tabla de Multiplicar',opts)
                .help()//para que salga la ayuda puesta arriba ej node app listar --help
                .argv;

     
module.exports = {
    argv
}    