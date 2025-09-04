//Agregar o eliminar Propiedades de un objeto
//Los opjetos tienen algo llamado sintaxis de punto
//Esta caracteristica nos ayuda a agregar o eliminar caracteristicas de igual forma


const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades al objeto
//Cuando agregamos mas propiedades a un opjeto por fuera de mismo utilizamos el simbolo de igual no los dos puntos
producto.imagen="imagen.jpg"

//Eliminar llavez de un objeto
delete producto.disponible;



console.log(producto);