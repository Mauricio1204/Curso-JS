//forEach
//El forEach es ideal para recorrer un arreglo ya que este se ejecutara el numero de registros que existan
const pendientes = [ 'Tarea','Comer','Proyecto','Estudiar JavaScrip' ];
//El foreach es una funcion de flecha "Arrow Fuction"
//Hay caracteristicas de los forEach
//si solo es de una linea podemos quitar las llavez 
//si solo es de una sola linea podemos quitar los parentesisi del argumento
pendientes.forEach( pendientes => console.log(pendientes))


//EJEMPLO 2
pendientes.forEach((pendientes,indice) => {
    console.log(`${indice}: ${pendientes}`);
    
})

