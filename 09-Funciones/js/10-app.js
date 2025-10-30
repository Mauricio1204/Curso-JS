//Arrow Function 
const aprendiendo = function (){
    console.log('Aprediendo JavaScrip');
}
//Para convertir una funcion en una arrowfunciontion o una funcion de flecha se 
//elimina la palabra fuction y se mantienen los parentecis y se pasa del lado dercho un simbolo de mayor igual que "=>"
const aprendiendo2 =  () => {
    console.log('Aprediendo JavaScrip2');
}
//Cuando tenemos Arrow Function de una sola linea podemos eliminar las llaves quedando de la siguiente forma 
const aprendiendo3 = () => console.log('Aprediendo JavaScrip3');
//De igual forma si tenemos un arrow function de una sola linea esta da por defecto el valor de return entonses podemos quita el console log 
const aprendiendo4 = () => 'Aprediendo JavaScrip4';



aprendiendo();
aprendiendo2();
aprendiendo3();
console.log(aprendiendo4());

//De esta forma podemos simplificar la funcion  