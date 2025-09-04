
const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
//Asignar el valor de una propiedad de un objeto a una varialbe
const Nombre = producto.nombre;
// La forma anteriror es la de la linea anterior asi se asignava la propirdad
//pero con EMASCRIP tenemos algo llamado objecdestruccion 
//que traes y crea la variable en un mismo paso
//const { nombre } = producto;
//const { precio } = producto;
//console.log( nombre );
//Aora si quisieramos simplificar las lineas anteriones podemos extraer
//todas las propiedades en un solo renglon
const { nombre , precio } = producto;
console.log(nombre);
console.log(precio);
