//Como unir dos objetos

const producto ={
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medias ={
    peso: '1k',
    medida: '1m'
}

console.log(producto);
console.log(medias);
//Una forma de unir dos objetos es con assian 
const resultado = Object.assign(producto,medias);
 //Existe otra forma de hacerlo con Spread Operator o Rest Operator
 //los 3 puntos seguidos quieren decir copia las caracteristcas del objeto que le pasemos
 const resultado2 = {...producto, ...medias}
console.log(resultado);