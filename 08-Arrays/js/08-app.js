const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
//const nombre = producto.nombre;
// console.log(nombre);
// Destructuring
const { nombre } = producto;
console.log(nombre);

//Destructuring con arreglos
const numeros = [10,20,30,40,50,60];
// Para poder utilizar esto en los arreglos tenemos que utlizar los corchetes cuadados "[]" 
//despues nombrar la posicion del valor y despues imprimir esa variable
// queisieramos acceder acualquer posicion debemos de nombrar todas las posiciones e 
//imprimir el nombre de la poscion que nesecites o poner una coma asta llegar a la posicion que nesecites 
const [primero,,tercero, ...metodo] = numeros;
//haora es comun que nesecitemos el primer valor y el segunda y nesecitamos agrupar los ultimos valores 
//en su propio arreglo eso lo logramos con el restoperator" que lo que ase es agrupar todos los valores que no estan 
//siendo agrupados en una variable
console.log(metodo);
console.log(primero);
console.log(tercero);

