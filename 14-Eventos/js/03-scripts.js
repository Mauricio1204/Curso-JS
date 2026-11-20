// Eventos en el teclado

// keydow se ejecuta cuando presionas una tecla
// keyup se ejecuta cuando sueltas la tecla que presionaste
// Para la validacion de formulari  os existe blur se ecuta una vez que entras al input y sales del inpit se ejecuta el blur 
// tambien existen eventos en el teclado como el copy "cttrl + C" que vasicamente es cuando copias algo en el imput
// pase es otro que es cuando pegas algo dentro del input "cttrl + v"
// Cut es otro evento en el teclado que se ejecuta cuando cortas algo del imput "cttrl + x"
// y el más comun es el input que vasicamente se ejecuta cuando ases algo de los eventos anteriores a esepcion del blur 
 /* si queremos saver que es lo que esta escriviendo usuario podemos pasarle el evento 
 dentro de los parentesis para saver que es lo que esta pasando   */
const busqueda = document.querySelector('.busqueda');

/* busqueda.addEventListener('keydown',() => { 
    console.log('Escriviendo... keydown');
    
} );

busqueda.addEventListener('keyup',() => { 
    console.log('Escriviendo...keyup');
} );
busqueda.addEventListener('blur',() => { 
    console.log('Escriviendo...blur');
} );

busqueda.addEventListener('copy' ,() => {
    
    console.log('Escriviendo... copy');
} )
busqueda.addEventListener('cut' ,() => {
    console.log('Escriviendo... cut');
} ) 
    */
/* El nombre del evento o parametro que le pasemos en los parentesis puede ser el que nosotros queramos no hay uno en espesifico */
busqueda.addEventListener('input' ,(evt) => {
    /* Este evento tiene demaciadas funciones para rastrear que pedo con el usuario y que esta escriviendo */
    // ejemplo de validacion para cuando envian un input vacio
        if (evt.target.value === '') {
            console.log('Fallo la validación');
            
        }
    // console.log(evt.target.value);
    

} )