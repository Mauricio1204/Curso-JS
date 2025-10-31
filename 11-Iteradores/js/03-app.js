//Reto de Fizz Buzz

//Supongamos que tenemos una serie de 100 todos los que sean multipos de 3 deberan imprimir en
//la consola todos los que son multiplos de 5 deben de imprimir la palabra buzz y los que son 
//multiplos de 3 y 5 deben imprimir fizz bus 

for (let i = 1; i <= 100 ; i++) {
    //multiplos de 3
    if (i % 3 ===0 && i % 5 === 0 ) {
        console.log('FIZZ BUZZ',i);
        
    } else if ( i % 5 === 0) {
        console.log(`BUZZ ${i}` );
    } else if (i % 3 === 0) {
         console.log(`FIZZ ${i}`);   
    }
}