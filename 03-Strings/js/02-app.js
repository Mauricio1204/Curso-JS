//Metodos
const producto = 'Monitor 20 pulgadas';
console.log(producto);
//Con .length podemos conoser la cantidad de productos en unacade de texto
//En el siguiente ejemplo podemos hacer 
console.log(producto.length);

//Para saber si una cadena de texto tiene alguna palabra en espesifico podemos utilizar el metodo "indexof" 
//Este metodo es utilizado por los buscadores para identificar palabras en bases de datos
//indexof nos debolvera la posicion en la que se encuentra la palabra
console.log(producto.indexOf('Monitor'))
//Existe un metodo más "include" este debuelve true o false ya que busca por mayusculas y minuscilas
console.log(producto.includes('Monitor'))


