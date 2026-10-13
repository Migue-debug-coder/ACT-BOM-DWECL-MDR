function url(){
    document.getElementById("info").textContent = window.location.href;
}
url();

function nombre(){
    document.getElementById("nombre").textContent = window.navigator.userAgent;
}
nombre();

function pantalla(){
    document.getElementById("pantalla").textContent = `El ancho es ${window.screen.width} px y el alto es ${window.screen.height} px`;
}

pantalla();

function idioma(){
    document.getElementById("idioma").textContent = window.navigator.language;
}

idioma();

function ventana(){

}

function volver(){
    window.history.back();
}