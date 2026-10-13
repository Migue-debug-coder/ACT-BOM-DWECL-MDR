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
    window.alert(`Ancho de la página: ${window.screen.width} px \n`+
        `Alto de la página: ${window.screen.height} px \n` +
        `Ancho de la zona visible de la página: ${window.innerWidth} px \n` +
        `Alto de la zona visible de la página: ${window.innerHeight} px \n`
    );
}

function volver(){
    window.history.back();
}

function recargar(){
    window.location.reload();
}

function iniciar(){
    let tiempo = 30;
    let contador = tiempo;
    const intervalo = setInterval(() => {
        document.getElementById("contador").textContent = contador;
        contador--;
        if(contador == -1){
            clearInterval(intervalo);
            document.getElementById.textContent = "El contador llegó a 0";
        }
        
    }, 1000);
}

function detener(){
    clearInterval(intervalo);
}

function abrir(){
    window.location.assign("https://github.com/octomonoli1");
}

function cerrar(){
    window.close();
}

function cambiar_fondo(){
    const confirmacion = window.confirm("¿Desea cambiar el color del fondo de la página?");
    
    if(confirmacion){
        let color = window.prompt("Introduzca un color: ");
        if(color != null){
            window.document.body.style.backgroundColor = color;
        }
    }
}

function mostrar_info(){
    let nombre = window.prompt("Introduzca su nombre: ");

    if(!nombre){
        window.alert("No has introducido nada");
    }else{
        window.alert(`Bienvenido al Sistema ${nombre}`);
    }
}

function comprobar_tamaño(){
    if(window.innerWidth < 768){
        window.alert(`Ventana Pequeña (Ancho actual de la pantalla: ${window.innerWidth} px)`);
    }else{
        window.alert(`Ventana Grande (Ancho actual de la pantalla: ${window.innerWidth} px)`);
    }
}