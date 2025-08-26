//convertit strings a numeros 
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;
const numero5 = 20.2;

console.log(numero1);
//Convertir un numero String a un numero
console.log(Number.parseInt(numero1));
//Convertir un numero String a un numero Desimal 
console.log(Number.parseFloat(numero2));
//Si intentamos convertir una pablada en numero nos regresara un error de "NAN" No es un numero 
console.log(Number.parseInt(numero3));

//Revisar si es un numero entero o no si es un entero regresara tru pero si es un desimal regresara false o si es una palabra
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero5));
