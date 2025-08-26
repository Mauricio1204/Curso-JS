const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si dos numeros son iguales
console.log(numero1 == numero3);
//Con dos signos de igual la comparacion no es estricta ya solo compara si son uguales en cuanto valor 
console.log(numero1 == numero2);
// Para comparar dos valores en todo ambito y volber la comparacion mas estrictra se utilizan los 3 sigonos de igual de esta forma comparamos valor tipo de dato
console.log(numero1 === numero2);
//Para casos en donde tengamos que comparar de manera estricta podenmos primero combertir de strig a numero de la siguiente forma
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

//Diferente de 
const password1 = "admin";
const password2 = "Admin";

//Comparador "Dierente de" no estricto
console.log(password1 != password2);
console.log(numero1 != numero2);
//Comparador "Dierente de" estricto comparando 
console.log(numero1 !== numero2);
console.log(numero1 !== numero2);

