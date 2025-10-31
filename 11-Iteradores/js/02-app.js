//"Break" y "Continue" del forloop
//"Brack" va a cortar la ejecusion del codigo como su misma palabra lo indica
//"Continue" nos va a permitir interseptar un elemento (identificarlo)

//Pregunta para optener un trabajo
//Crea un forloop que al detectar el numero 5 detenga su ejecusion
/* 
for ( let i = 0; i <= 10; i++ ){
    
    if (i === 5) {
        console.log('Este el ');
        break;//De esta forma terminamos la ejecusion en determinado numero 
    }
    console.log(`Numero ${i}`);
}  
 */

/* for ( let i = 0; i <= 10; i++ ){
    
    if (i === 5) {
        console.log('Numero Cinco');
        continue;//Loque hace continue es que identifica y 
                 // no deja continuar la condision sino que la regresa al 
                 // inicio a validar otra linea es decir toma el lugar de lina de el 5 y pasa 
                 // al siguiente numero 6 pero no detine la ejecusion 
    }
    console.log(`Numero ${i}`);
}   */

   const carrito  =[
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350 ,descuento :true},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
]
for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo  ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
    
    
}