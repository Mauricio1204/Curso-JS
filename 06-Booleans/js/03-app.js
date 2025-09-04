//Supongamos que nesecitas validar un inicio de secion entonsestonses seria de la siguiente manera

const autentificado =true;
//El valor de la constante "autentificado" esta definido en "true" por implicito entonses no esta mal compararlo 
// de todas maneras en la validacion del if pero para optimizacion de codigo es mejor quitar la comparación
if(autentificado === true){
    console.log ('Si puedes ver netflix');
}else{
    console.log('No pudes ver netflix');
}
//Este es codgio mejor que el anterior 
if(autentificado){
    console.log ('Si puedes ver netflix');
}else{
    console.log('No pudes ver netflix');
}
//si cambiaramos el valor a falce en automatico caeria en el else del if sin nesecidad  de comparalo
const autentificado1 =false;
if(autentificado1){
    console.log ('Si puedes ver netflix');
}else{
    console.log('No pudes ver netflix');
}
// Otra forma es con un opjeto ternario 
console.log(autentificado ? 'si esta autentificado' : 'No esta autenticado');