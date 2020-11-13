//requireds
const fs = require('fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');


console.log("lllllllllllllllllllllllllllll")
console.log(argv)
/*
const argv = require('yargs')
                //con command ponemos la ayuda a la oocion litar, del programa en consola
                .command('listar','Imprime en Consola la tabla de Multiplicar',{
                //con esta estructura estoy especificando en cualquier posicion de los parametros que ponga base o b
                //en el programa los tome com parametros ejm node app --lidsd --base    
                    base: {
                         demand: true,
                         alias: 'b',
                    },
                    limite:{
                        alias:'l',
                        default:10//esto lo pongo por si la persona no pone nada
                    }
                })
                 
                .command('crear','Genera un archivo con la tabla de Multiplicar',{
                    //con esta estructura estoy especificando en cualquier posicion de los parametros que ponga base o b
                    //en el programa los tome com parametros ejm node app --lidsd --base    
                        base: {
                             demand: true,
                             alias: 'b',
                        },
                        limite:{
                            alias:'l',
                            default:10//esto lo pongo por si la persona no pone nada
                        }
                    })
                .help()//para que salga la ayuda puesta arriba ej node app listar --help
                .argv;
*/
const  {crearArchivo,listarTabla} = require('./multiplicar/multiplicar.js');

//let base = "as";
//console.log(module); Por defecto se ejecuta cunado empieza cada aplicacion
//console.log(process);Son todos los procesos que se ejecutan con la aplicacion
//console.log(process.argv); Son los parametros pasados por consola
let argv2 = process.argv;

let comando = argv._[0];//para listar el primer parametro que se pasa como parametro en la consola

switch (comando){

    case 'listar':
         //la del profesor
         listarTabla(argv.base,argv.limite);

          //mi solucion 
          /*listarTabla(argv.base,argv.limite)
          .then(archivo => console.log(archivo))
          .catch(e => console.log(e));
          //console.log('Listar');*/
          break;
         
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo.green}`))

        
        .catch(e => console.log(e));
        //console.log('crear');
        break;
        
    default:
        console.log('Comando no reconocido');    
}


//console.log('Limite',argv.limite)


//let argv = process.argv;
//let parametro = argv[2];
//suponiendo que el parametro se pasa de la siguiente manera "--base=5" por ejemplo pa la tabla del 5
//let base = parametro.split('=')[1] 
 

//console.log(base)

//De esta manera base la entramos por consola y la ejecuta nuestro programa 
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/
//npm init ---> Con este comando se genera package.json con toda la informacion referente al proyecto 

