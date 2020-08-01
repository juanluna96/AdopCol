(function() {
    /* ------------------ Objeto con propiedades de formulario ------------------ */
    var propPagina = {
        ListaNavegacion: document.getElementsByClassName('navbar-nav')[0].children,
        urlActual: window.location.pathname.slice(1)
    }

    /* -------------------- Objeto con metodos del formulario ------------------- */
    var metPagina = {
        saber_pagina_actual: function() {
            for (let i = 0; i < propPagina.ListaNavegacion.length; i++) {
                if (propPagina.ListaNavegacion[i].children[0].getAttribute('href') == propPagina.urlActual) {
                    propPagina.ListaNavegacion[i].className = "nav-item active";
                } else {
                    propPagina.ListaNavegacion[i].className = "nav-item";
                }

            }
        }
    }
    metPagina.saber_pagina_actual();
})()