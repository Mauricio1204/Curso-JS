//para agregar un objeto dentro de otro objeto solo se cre como un if anidado
const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas : {
            Peso: '1kg',
            medida: '1m'
        },
        fabricacion : {
            pais:"china"
        }
    }
}
console.log(producto);
console.log(producto.informacion.medidas.Peso);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricacion.pais);
