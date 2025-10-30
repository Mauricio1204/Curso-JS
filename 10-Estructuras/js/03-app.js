//Operador Mayor que y menor que 
const dinero = 300;
const totalAPagar = 300;

//Funcion Mayor que
if (dinero >= totalAPagar) {
    console.log('Fondos suficientes');
    totalFinal = dinero - totalAPagar;
    console.log(`Fondos Actuales ${totalFinal}`);
}else{
    console.log('Fondos insufisiente ');
}
//Funcion menor que "hay que acomodar las condisiones de forma que me agan sentido ami "
if (dinero <= totalAPagar) {
    console.log('Fondos insufisiente ');
}else{
    
    console.log('Fondos suficientes');
    totalFinal = dinero - totalAPagar;
    console.log(`Fondos Actuales ${totalFinal}`);
}