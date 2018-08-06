
// requireds
//const fs = require('fs');//este require es nativo de node llibreria que ya existe en node, proyecto de node
//const fs = require('express');libreria no es propia de node, es un paquete que se instala 
//const fs = require('./archivo');archivos que nosotros mismos escribimos y estan  en nuestro proyecto 
const argv = require('./config}/yargs').argv;//el punto argv es para descturcturarlo y poder invocar directamente lo que voy a usar del otro archivo 
const colors = require('colors');
const { crearArchivo, listarTabla }= require('./multiplicar/multiplicar'); //son como las importaciones en java , pero voy a desctructurar el archivo para invocar directamente la funcion
 let comando = argv._[0];//para obtener el primer elemento del arreglo 
//let base = '4';


switch ( comando) {
  
  case 'listar':
 listarTabla(argv.base, argv.limite);
  break;
 
case 'crear':

crearArchivo(argv.base, argv.limite)
.then(archivo => console.log(`Archivo creado: ${archivo}`))
.catch(e => console.log(e));
break;


default:
console.log('no reconocido');
  
}

//console.log(process.argv);
let argv2 = process.argv
    


//console.log(argv.base);
//console.log('limite', argv.limite);

//let parametro= argv[2];
//let base=parametro.split('=')[1]





//podemos grabar esto y crear un archivo de texto con este valor . 

