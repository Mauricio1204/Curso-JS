const autentificado = true;
const puedePagar = false 
//Operador ternario muy parecido al if pero todo en una sola linea
//Se lee y se compone de la siguiente forma 
// si autentidicado esta en tue "?" entonses se ejecuta  ":" si no esntonses se ejecuta esto
// ? "se interpreta como la primera parte del if"
// : "se interpreta como else del if"
// al igual que como en un if normal podemos revisar el numero de condissiones que nesecitemos
// con los operadores de comparacion 
console.log(autentificado && puedePagar ? 'Si esta autentificado' : 'no esta autentificado');
//TAmbien podemiosanidar los ternarios al igual que los if colocando la suguiente condision en el 
// valot verdadero quedando de la siguiente manera 

console.log(autentificado ? puedePagar ? 'Si esta autentificado y puede pagar' : 'Si autenticado, no puede pargar' : 'no esta autentificado');