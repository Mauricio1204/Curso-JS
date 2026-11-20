/* eventos al dar Scrool */

window.addEventListener('scroll',()=>{
    /* Ejercisio para saver el numero de pixeles recorridos en Y con scroll
    const scrollPX = window.scrollY
    console.log(scrollPX); */
    const premium = document.querySelector('.premium');
    // Esto nos va a decir a que distancia se encuentra el escrol
    const ubicasion = premium.getBoundingClientRect();
   // console.log(ubicasion);
    
    if(ubicasion.top < 784){
        console.log('El elemento ya asta visible');
    }else{
        console.log('Aún no, da más scroll');
        
    }
    
})