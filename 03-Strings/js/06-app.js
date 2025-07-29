//Metodos Repeat y split
const producto = 'Monitor 20 Pulgadas';
//Etes metodo permite repetir una cadana de texto la veses que quermos
const texto = 'En promocíon '.repeat(3);

console.log(texto);
console.log(`${producto} ${producto} !!!`); 
//si queremos dividir una  cadena de texo podemos utilizar Split este metodo resibe el caracter por el cual queramos que separe la cadena de texto
const actividad ="Estoy aprendiendo JavaScript modenro";
console.log(actividad.split(" "));

const hobbies = 'Leer, Estudiar, Correr, Escuchar musica, fumar cuando hace lluvia, jugar videojuegos'
console.log(hobbies.split(", "));
//si queremos resaltar alguna parte en especifico estableseriamos lo siguiente 
const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));