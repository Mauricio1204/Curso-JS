
//Cuando queremos mostrar propiedades que estan dentro del mismo objeto antes de la propiedad utilizaremos la palabra
//THIS para referinos a los balores dentro del mismo objeto
 const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
     mostrarInfo: function(){
        console.log(`El Producto: tiene ${this.nombre}un precio de: ${this.precio}`)
     }

    }

     const producto2 ={
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
     mostrarInfo: function(){
        console.log(`El Producto: tiene ${this.nombre}un precio de: ${this.precio}`)
     }
}


producto.mostrarInfo();
producto2.mostrarInfo();