//añadir de funciones a un metodo "reproductor"
//a lo que esta dentro de un metodo se le conose como propiedades pero
//pero cuando contien una funcion se le conose como
//"METODOS DE PROPIEDAD"

const reproductor = {
    reprocir: function(ID){
        console.log(`Reproduciendo canción...${ID}`);
    },
    pausar: function(){
        console.log('Pausado');
    },
    borrar: function(){
    console.log(`Borrando canción... ${30}`);
    },
    agregarPlaylist: function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    },
    repoduciendoPlaylist: function (nombre){
        console.log(`Reproduciendo ${nombre}`)

    }

}

reproductor.reprocir(30);
reproductor.reprocir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('Pa chambiar agusto');
reproductor.agregarPlaylist('rock 90s ');
reproductor.repoduciendoPlaylist('Pa chambiar agusto');