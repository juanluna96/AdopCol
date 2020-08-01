(function() {
    /* ------------------ Objeto con propiedades de formulario ------------------ */
    var propFormulario = {
        formulario: document.formulario_contacto,
        elementos: document.formulario_contacto.elements
    }

    /* -------------------- Objeto con metodos del formulario ------------------- */
    var metFormulario = {
        inicio: function() {
            for (let i = 0; i < propFormulario.elementos.length; i++) {
                if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
                    propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                    propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                }
            }
        },
        focusInput: function() {
            this.parentElement.children[1].className = 'label active';
        },
        blurInput: function() {
            if (this.value == "") {
                this.parentElement.children[1].className = 'label';
            }
        }

    }

    metFormulario.inicio();
})()