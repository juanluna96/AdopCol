(function() {
    /* -------------------- Objeto con las propiedades de Tab ------------------- */

    var propTabs = {
        primer_encabezado: document.getElementsByClassName('encabezado_menu')[0].firstElementChild,
        primer_contenido: document.getElementById('contenido_perros').firstElementChild,
        enlaces_encabezado: document.querySelectorAll('.encabezado_menu li a'),
        divs_contenido: document.querySelectorAll('#contenido_perros > div'),
        contenido_activo: null
    }


    /* ----------------------- Objetos con metodos de Tab ----------------------- */
    var metTabs = {
        inicio: function() {
            propTabs.primer_encabezado.firstChild.className = 'active';
            propTabs.primer_contenido.className = "active";

            for (let i = 0; i < propTabs.enlaces_encabezado.length; i++) {
                propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
            }
        },
        evento: function(e) {
            e.preventDefault();
            for (let i = 0; i < propTabs.enlaces_encabezado.length; i++) {
                propTabs.enlaces_encabezado[i].className = "";
            }
            for (let i = 0; i < propTabs.divs_contenido.length; i++) {
                propTabs.divs_contenido[i].className = "";
            }
            this.parentElement.firstElementChild.className = 'active';
            propTabs.contenido_activo = this.getAttribute('href');
            document.querySelector(propTabs.contenido_activo).className = "active";
            document.querySelector(propTabs.contenido_activo).style.opacity = 0;

            setTimeout(() => {
                document.querySelector(propTabs.contenido_activo).style.opacity = 1;
            }, 100);

        }

    }

    metTabs.inicio();
})()