//Ejemplo de arrglo digamos tradicional.
const pendientes = [ 'Tarea','Comer','Proyecto','Estudiar JavaScrip' ];

//Veremos el "For-in"

//"For OF" itera sobre arreglos
/* for( let pendiente of pendientes){
    console.log(pendiente);
} */
//Minetras que "FOR IN" itera sobre objetos
/* for( let pendiente in pendientes){
    console.log(pendiente);
} */

//Apesar de que estos dos son parecidos si creamos un bjeto 

const automovil = {
    modelo : 'Camaro',
    year: 1969,
    motor: '6.0'
}

/* for (const propiedad in automovil) {    
    console.log(propiedad);
    //Si quisieramos los valores de cada una de las propiedades nesecitariamos los "template string"
    //dentro de los "template string" colocamos la variable automovil ponemos corchetes y pasamos propiedad/
    console.log(`${automovil[propiedad]}`);

} */

//Existen diferentes formas de hacerlo en EMaCrips 7 agregaron un iterador para objetos 
//De esta forma podemos iterar sobre los valores de un objeto y otro sobre los arreglos normales 
for(let [ llave ,Valor] of Object.entries(automovil)) {
    console.log(Valor);
    

}