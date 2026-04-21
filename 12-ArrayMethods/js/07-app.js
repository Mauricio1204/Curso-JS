//Un array method que se llama  Concat que nos permitira unir dos arreglos 

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 =[ 'Agosto', 'Septiembre'];
const meses3 = meses.concat(meses2);
console.log(meses3);

//Asi mismo puedes unir los arreglos o valores que nesecites solamente poniendo una coma y el nombre del array
const meses4 =['Octubre','Noviembre','Diciembre'];

const resultado = meses.concat(meses2,meses4);

console.log(resultado);

// Existe otra forma de hacerlo y es con el "Spread operator" o rest operator  que este equibale a cerar
//un nuevo arreglo para unirlos dentro de 
//de esta forma unimos los arreglos dentro de otro arreglo
const resultado2 = [...meses,...meses2,...meses4];

console.log(resultado2);

