//Buenas practicas y consejos del if
const autenticado = true;

//Bien ahora cuando en un if evaluamos por un tru no es nesesario compararlo con un 
//comparador estricto basta con colocar el parametro en la evaluación y listo por que ya se da por echo que autentificado esta en true
if (autenticado){
    console.log('El cusuario esta autenticado');
}

//como segundo ejemplo digamos que estamos creando un juego y tenemos que evaluar los puntos
//Es importante revisar las condisiones en cuanto a logica si lo dejaramos de esta forma
//Si tenemos 401 el mensaje que revisariamos seria "Buen puntaje... Felisidades"
//y el nesecitamos que se muestre es "Excelente!!"
const puntaje = 500;

/* if(puntaje > 300){
console.log('Buen puntaje... Felisidades');

}else if(punta > 400){
    console.log('Excelente!!');
} */
//En tonses la logia correcta para que se muestren los mensajes correcto seira invertiendo
//los lugares quedando de la siguiente forma con esto si tenemos un puntaje de 401 el mesaje sera "Exelente!!"
/* if(puntaje > 400){

  console.log('Excelente!!');
}else if(punta > 300){
console.log('Buen puntaje... Felisidades');  
} */

//otra forma de utilizar esto es separar la evaluacion en dos if diferentes 
/* if(puntaje > 400){

  console.log('Excelente!!');
}
if(punta > 300){
console.log('Buen puntaje... Felisidades');  
}  */
//Una de las buenas practicas es colicar un return para finalizar un if 
//pero este solo funciona dentro de una funcion entonses lo que tendriamos que hacer es 
//transformar esto en una funcion de la siguiente manera de esta manera cortamos la ejecusion de
//if por
function revisarPuntaje(){
if(puntaje > 400){
  console.log('Excelente!!');
  return;
}
if(punta > 300){
console.log('Buen puntaje... Felisidades');  
return;
} 
}
revisarPuntaje();