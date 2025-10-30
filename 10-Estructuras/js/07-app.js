//operador or "O Una O Otra"  este verifica dos condisiones 
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;
//al operador or se le conose como pipes y se representa con 2 simbolos de tuberia "||"
if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('si podemos pagar');
}else{
    console.log('Fondos Insuficientes');
}

