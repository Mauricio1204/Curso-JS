//Acceder a los valores de un arreglo

const numeros = [10,20,30,40,50,[1,2,3]]; 

console.log( numeros);
//Existe una segunda forma de presentar la informacion en consola para verla mas ordenada
console.table(numeros);

//para mostror un valor en pecifico de la siguiente forma pasando la posicion del valor que quieres mostrar
console.log(numeros[2]);
console.log(numeros[0]);
//Suponiendo que quisieramos imprimir un valor que no exista en el arreglo por decir la posicion 20 nos dara como 
//como indefinido ya que si estamos creando la variable pero no existe esa posicion en el arreglo 
console.log(numeros[20]);
// Suponiendo que tenmos un arrglo dentro de otro arreglo como podemos 
// acceder de la siguiente manera primero la psocion del arreglo y
// luego la poscion del valor quequeremos mosrar en 
console.log(numeros[5][2])

