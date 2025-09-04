//Como Acceder a las propiedades del opjeto
//Los opjetos tienen algo llamado sintaxis de punto
//Es decir despues del nombre del opjeto si ponemos un punto podemos acceder a los atibutos 
const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);
//Acediendo con notacion sintacxis de puntos
console.log(producto.nombre);
//Existe una segunda manera atravez de corchetes pero el atributo del objeto lo tienes que poner entre comillas
console.log(producto['nombre']);
//Ambas formas son balidas pero es mas comun por puntos.
