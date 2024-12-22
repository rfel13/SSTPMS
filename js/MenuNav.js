function abrirNavMenu() {
    /**
     * Definiendo tamano de la caja de menu dependiendo de la resolucion de pantalla
     */
    if (screen.width < 480) {
        document.getElementById("navLateral").style.width = "200px";

    } else if (screen.width > 479 && screen.width < 769) {
        document.getElementById("navLateral").style.width = "250px";

    } else if (screen.width > 768) {
        document.getElementById("navLateral").style.width = "350px";
    }

    /**
     * Evento click para llamar a la funcion cerrar
     */
    document.getElementById("pagina").addEventListener("click", cerrarNavMenu);

    /**
     * se modifica window.onscroll para mantener la posición actual 
     * Para inhabilitar el scroll mientras esta abierto el menu
     */
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y)
    };
}

function cerrarNavMenu() {
    document.getElementById("navLateral").style.width = "0";

    /**
     * window.onscroll
     * Habilitando el scroll al cerrar el menu
     */
    window.onscroll = null;
}
