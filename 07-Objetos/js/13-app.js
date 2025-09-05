
const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    }
//supongamos que queremos saber si una consulta en la base de datos de un client esta basia las keys nos trae informacion
//Retorna las propiedades del objeto en cuention    
console.log(Object.keys(producto));
//si queremos saber que informacion esta retornando la consulta utilizaremos Object.values ya este nos traera los valores

console.log(Object.values(producto));
//si queieramos consultar todo como las propiedades con los valores utilizaremos Object.entries que nos devuelve
//odo sobre el objeto en cuestion en pares 
console.log(Object.entries(producto));