//Iteradores "Foorloup"
//El for consta de 3 partes la primera el inicializador donde inicia 
//La segunda es la condicion que va a revisar 
//La tercera parte es el incremento 

/*  for ( let i = 0; i < 10; i++ ){
    console.log(`Numero ${i}`);
}  */
//Pregunta para programadores JR ¿En un forloop como diferencias pares de nones 
//bueno esto lo asemos con el operador modulo de esta forma podemos determinar que numero es par y cual es impar
//para una entrevista de trabajo

/* for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    }else{
        console.log(`El número ${i} es impar`);        
    }
} */

    const carrito  =[
    {nombre: 'Monitor 15 pulgadas ', precio: 150},
    {nombre: 'Monitor 33 pulgadas ', precio: 250},
    {nombre: 'Monitor 55 pulgadas ', precio: 350},
    {nombre: 'Monitor 70 pulgadas ', precio: 450},
    {nombre: 'Monitor 80 pulgadas ', precio: 650},
    {nombre: 'Monitor 90 pulgadas ', precio: 750},
]

for (let i = 0; i < carrito.length; i++) {
 console.log(`${i}`,carrito[i].nombre,`$`,carrito[i].precio );    
}


