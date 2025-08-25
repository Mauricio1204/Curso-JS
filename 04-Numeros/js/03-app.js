//Objeto Math este contiene barias operasiones matematicas mismo que esta en la ventageneral de js podemos acceder a el
let resultado;

//Optener pi
resultado = Math.PI;
//Redondear numeros para esto accedemos al parte de math.round 
//sigueindo las reglas de redondeo este subira de .5 asia abajo y .6 asiarriba
resultado =Math.round(2.2);
resultado =Math.round(2.4);
resultado =Math.round(2.5);
resultado =Math.round(2.8);
resultado =Math.round(2.6);
//Podemos estableser que apartir de .1 redonde asia arriba esto lo establesemos con ceil 
resultado =Math.ceil(2.1);
//Podemos estableser que apartir de . redonde asia abajo esto lo establesemos con floor
resultado = Math.floor(2.9);

//Podemos sacar laraiz cuadra de cualquier numero con la siguiente funsion sqrt este nos debuelve la raiz de cualquier numero
resultado = Math.sqrt(144);
//El vaor absoluto solo trae el valor independiente si es negativo o positovo 
resultado = Math.abs(-200);
//Para optener la potencia de cualquier valor utilizaremos la función Pow resibe dos agumentos el numero base y el balor de la postencia
resultado= Math.pow(8,3);
//Saber cual es el minimo de una serie de numeros en deonde resibe x cantidad de numeros y devuelbe el menor
resultado = Math.min(7,8,9,4,5,-1)
//maximo
resultado = Math.min(7,8,9,4,5,-1)
//Aleateorio usualmente este metodo da resultados desimales pero lo podemos multiplicar por algun valor entero para optener resultados mallores a un valor de  0. infinito
//resultado = Math.random()*20
//Aleatorio dentro de un rango esta forma nos dara un resultado con de entre 0 y 30 
resultado = Math.floor( Math.random()*30)

console.log(resultado);