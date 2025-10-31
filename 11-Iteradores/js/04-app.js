//WHILE se ejecuta misntras que una condision se averdadera
// consta de 3 partes al igual que el for pero en partes

let i = 0; /* INICIALIZAMOS EL WHILE */ 
while ( i < 10 ) {/* CONDISION A REVISAR */
    console.log(`Numero ${i}`);
    i++  /* INCREMENTO */
}


//Ejercisio de detctar pares y nones
let a = 0;
while ( a < 10) {
    if (a % 2 === 0) {
        
        console.log(`Numero ${a} es par`);
    }else{
        console.log(`Numero ${a} es impar`);
        
    }
    a++;
}