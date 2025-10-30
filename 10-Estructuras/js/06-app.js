//operador && este verifica dos condisiones 
const usuario = true;
const puedePagar = false;

if (usuario && puedePagar){
   console.log('Si puedes comprar');
}
//Buen aora nesecitamos revisar el orden en que ejecutamos las condisiones para poder 
//cubir todos los posibles casos o revisar todos los posibles casos 
//de esta forma podemos validar un bien flujo de trabajo
else if(!puedePagar && usuario) {
    console.log('No no puedes pagar');
}
//Si quisieramos negar una condision es decir si no es usuario solo agrgamos el simbolo de interrogacion al principio de la condicion
//SE LEERIA COMO "No es usuario"
else if(!usuario){
    console.log('Inicia secuión o saca una cuenta');
}
else if(!puedePagar){
     console.log('Fondos insuficientes');
}
