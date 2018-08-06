

// requireds
const fs = require('fs');//este require es nativo de node llibreria que ya existe en node, proyecto de node
//const fs = require('express');libreria no es propia de node, es un paquete que se instala 
//const fs = require('./archivo');archivos que nosotros mismos escribimos y estan  en nuestro proyecto 
//
const colors = require('colors');
let listarTabla = (base, limite =10) => {
      
    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);

for (let i=1; i<=limite; i++){
 
    console.log( `${base} * ${i} = ${base * i}`)
    }
}


let crearArchivo = (base, limite=10) => { 

return  new Promise ((resolve, reject) => {
if (!Number(base)){

    reject(`El valor introducido ${base} es numero`);
    return;  //aqui para detener el codigo 
}
let data= '';

for (let i=1; i<=limite; i++){
 
    data += `${base} * ${i} = ${base * i}\n`;
}


fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {//como estoy en la carpeta dondes esta tablas, puse esta ruta, pero si estuviera en archivos anterior voy poniendo ./ o ../ segunsea el caso
    if (err) reject (err)
    else 
          resolve (`tabla-${base}-al-${ limite }.txt`)
    
        });

    });


} 

module.exports = {

    crearArchivo, 
    listarTabla
}  //elementos  que  deseo  utilizar de forma global, es decir a nivel de modulo 


//podemos grabar esto y crear un archivo de texto con este valor . 
