const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"; 

//console.log(boolean1);
//console.log(boolean2);
//  Comparar 2 valores con el valor "true" aun con el comparador que no es estricto lo tomara como valores diferentes ya que el typo de dato es diferente 
console.log(boolean1 == boolean3);

//Si queremos crearun bolean apartir de estro lo que estaremos creando no es un valor de typo bolean sino un opjeto "CONSTRUCTOR"

const boolean4 = new Boolean(tue);

console.log(typeof boolean4);
