//Parametros y argumentos en funciones 
function sumar( a ,b ) {// a y b son parametros 
    console.log( a + b );
}
sumar(2 , 3); // 2 y 3 son argumentos
// Un parametro es aquello que nesecitas para que funsione
//Un argumento son los valores que tomaran para realizar la función 

//De esta forma podemos realizar cada una de las funsiones mas complejas segun lo requiramos
function saludar(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Maurucio' ,'Chavez')
