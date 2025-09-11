const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ,'julio'];
//Valores de un arreglo si se pueden modificar
meses[0] = 'Nuevo Mes';
meses[7] ='Ultimo mes';
//las posisiones no nesesariamente tienen que ser en serie podemos brincarnos las posiciones y 
// no las listara si no estan como en ejemplo debajo no listara 8 y 9 
meses[10] ='Ultimo mes';
console.table(meses);

