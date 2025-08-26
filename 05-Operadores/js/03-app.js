//El valor de tipo undefined quiere decir que la variable esta creada pero no hay ningun tipo de dato asignado.
let numerno;
console.log(numerno);
//typeof no sirve para cer que tipo de dato es el que estamos resiviendo o imprimiendo
console.log(typeof numerno);
//Null
let numero2 = null;
console.log(numero2);0
console.log(typeof numerno2);

console.log(numerno == numero2);
//Para una mejor seguridad de ejecusion de codigo cuando trapaleamos datos para comparacion es mejor utilizar el comparador estricto para comparar el tipo de dato y el valor sean iguales
console.log(numerno === numero2);