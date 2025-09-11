//Como acceder a todos los elementos del arreglo "Recorrelo"
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
//cuanto mide el arreglo esto se logra utilizando length
console.log(meses.length);
//utilizaremos un iterador
for(let i=0 ; i < meses.length; i++){
    console.log(meses[i]);
}