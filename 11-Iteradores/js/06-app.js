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



//Ejemplo 3
const carrito = [
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
]
//Si aplicamos las reglas entes vistas podemos quitar las llavez y los parentecisi danto un aspecto mas compacto y limpio
//Como estamos mostrando un objeto recordemos que podemos acceder a las caracteristicas con el punto
const nuevoArreglo = carrito.forEach( prducto => prducto.nombre,);

//La sintaxis para el map es la misma
//La diferencia es que "MAP" crea un arreglo nuevo y "Foreach" no creo un arreglo nuevo

const nuevoArreglo2 = carrito.map( prducto => prducto.nombre);

console.log(nuevoArreglo);

console.log(nuevoArreglo2);







