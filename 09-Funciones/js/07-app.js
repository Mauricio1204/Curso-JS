//Como se Comunican las funciones entre si 
//Para  esto se reduce basicamente a encadenacion de funciones 
iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');
    usuarioAutentificado('Pablo');
}

function usuarioAutentificado(usuario){
    console.log('Autentificando usuario...espere...');
    console.log(`Usuario autentificado exitosamente: ${usuario}`);

}