const reproductor = {
                reprocir: ID      =>console.log(`Reproduciendo canción...${ID}`),
                  pausar: ()      =>console.log('Pausado'),
                  borrar: ID      =>console.log(`Borrando canción... ${ID}`),
         agregarPlaylist: nombre  =>console.log(`Creando Playlist: ${nombre}`),
    repoduciendoPlaylist: nombre  =>console.log(`Reproduciendo ${nombre}`),
}



reproductor.reprocir(30);
reproductor.reprocir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.agregarPlaylist('Pa chambiar agusto');
reproductor.agregarPlaylist('rock 90s ');
reproductor.repoduciendoPlaylist('Pa chambiar agusto');