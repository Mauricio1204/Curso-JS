//Parametros por defauld es decir por defecto
//Para poder poner un valor por defecto basta con igualarlo ejemplo
//el resultado en consola seria "Hola Maurucio No tiene apellido"
// function saludar(nombre,apellido = 'No tiene apellido'){
//     console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar('Maurucio' )
//Pero como no podemos poner eso simplemente lo dejamos como un string basio
function saludar ( nombre = '' , apellido = ''){
     console.log(`Hola ${nombre} ${apellido}`);
 }

 saludar('Maurucio' )
