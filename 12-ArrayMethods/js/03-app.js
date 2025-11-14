//Funcion "Reduce"
//Que como su nombre lo indica se encarga de reducir una gran cantidad de codigo
//tomando como ejemplo el carrito de compras queremos darle al cliente el total a pagar 
// seria de la siguiente manera
//Ejemplo de arreglo de opjetos.
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
let total = 0;
//lo prodiamos hacer con el Foreach que vimos anteriormente en clase
carrito.forEach(producto => total += producto.precio);
console.log(total);
//La forma de hacelo con "Recuce" es un poco mas 
// compleja ya que no sige los patroness que usualmente utilizamos
//Esta funcion recive dos argumentos 
// 1 es el valor anterior o valor previo 
// 2 el valor actual 
// es decir el valor del nuevo producto
let resultado = carrito.reduce(total, producto =>  )

 