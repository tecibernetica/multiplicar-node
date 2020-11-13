const { Console } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

let base = 5;
let data = '';
let lisstado = '';


/**
 * TAREA CREAR UNA FUNCION listarTabla que dado la base y el limite devuelva los resultados por consola
 * 
 */

/*ESTE ES MI EJERCICIO Y PINCHO BIEN 
let listarTabla = (base, limite) => {
    return new Promise((resolve,reject) =>{
        if(!Number(base)){
            reject(`"${base}" No es un numero`);
            return;
        }
        if(!Number(limite)){
            reject(`"${base}" No es un numero`);
            return;
        }

        for(let i=1;i <=limite;i++){
            lisstado += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(lisstado);


    })
}
*/

//ESTA ES LA SOLUCION DEL PROFESOR
//limite = 10 es el valor por default y se puede poner de esa manera en caso de que se omita poner el valor del limite
let listarTabla = (base, limite =10) => {

        console.log('==========================='.green);
        console.log(`     Tabla de ${base}      `.green);
        console.log('==========================='.green);

        for(let i=1;i <=limite;i++){
            console.log(`${base} * ${i} = ${base*i}\n`);
        }

        
}

//TAREA 2 PONERLE LIMITE A CREAR ARCHIVO TAMBIEN

let crearArchivo = (base,limite = 10) =>{
    
    return new Promise ((resolve,reject) =>{
    
    if(!Number(base)){
        reject(`"${base}" No es un numero`);
        return;
    }

    if(!Number(limite)){
        reject(`"${limite}" No es un numero para el LImite`);
        return;
    }
    
    for(let i=1;i <=limite;i++){
        data += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
        if (err) 
           reject(err);
        else
           resolve(`tabla-${base}-${limite}.txt`);
      });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
/*for  (let j =1;j<11;j++){
    let data = '';
    for (let i =1;i<11;i++){
        resultado = j*i
        data +=`${j} * ${i} = ${resultado}\n`;
    
        //console.log(`${base} * ${i} = ${resultado}`);
    }
    fs.writeFile(`tablas/tabla-${j}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`El Archivo de la Tabla del ${j} ha sido creado`);
      });
}
*/