
const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
//Las propiedades de los objetos si puedes ser reasicnadas
producto.disponible=false;
delete producto.precio;

console.log(producto);
