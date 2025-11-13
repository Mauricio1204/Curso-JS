const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Comprobar si un valor existe en un arreglo 
// Forma manual
meses.forEach( mes => {
    //Esta forma estavien para una entrevista
   if (mes === 'Enero') {
    console.log('Si existe Enero');
   }
    
});
//Pero podemos hacerlo en la vida real con un array method que revisa si ya existe el 
//valor dentro del arreglo
// Forma automatizada
//Pero "Includes" solo funciona en arreglos que solo tiene un indice 
const resultado = meses.includes('Enero');
console.log(resultado);


//Si quisieramos revisar dentro de un arreglo de objetos se utiliza ".some" 
//Entonses basicamente los array method son iguales que foreach son arreows 
//Primero pasamos el valor donde va ir iterando y arrow function cuando pasamos
//un solo argumento podemos quitar los parentecis , despues para la comprobacion
//primero colocamos un return y despues la comprobación y despues solo imprimos
//ademas de que es un arrow function podemos aplicar las mismas normas como es una sola
//linea de codigo podemos eliminar las llavez y return ya que estas se dan por implicito
//cuando solo es una sola linea 
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);
//Tambien poemos utilizar el some un un arreglo tradicional 
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);
