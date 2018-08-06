
const opts = {

base: {
               demand: true,
               alias : 'b'
      },

limite: {

         alias: 'l',
       default:10
      } 

}






const argv = require('yargs') //no llevva ruta relativa porque es un paquete 
.command('listar', 'imprime en conola la tabla de multiplicar', opts)
.command('crear', 'genera archivo  cona la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {

  argv
}

