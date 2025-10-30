//Operador Mayor que y menor que 
const dinero = 100;
const totalAPagar = 500;
const tarjeta = true;
const cheque = false
//Funcion Mayor que
//En los IF se ejecuta solo la primera condision que se cumpla ignorando si se cumple 
//otra 
if (dinero >= totalAPagar) {
    console.log('Fondos suficientes');
    totalFinal = dinero - totalAPagar;
    console.log(`Fondos Actuales ${totalFinal}`);
} else if(cheque){
    console.log('Si puedo pagar tengo el cheque');

}
 else if (tarjeta) {
    console.log('Si puedo pagar tengo la tarjeta--');
}
 else{
    console.log('Fondos insufisiente ');
}