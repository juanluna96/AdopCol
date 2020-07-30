var nota_escala;

function prueba(nota_escala) {
    switch (nota_escala) {
        case (nota_escala <= 3.29):
            nota_escala = 3;
            break;

        case ((nota_escala >= 3.3) && (nota_escala <= 3.99)):
            nota_escala = 4;
            break;

        case ((nota_escala >= 4) && (nota_escala <= 4.59)):
            nota_escala = 5;
            break;

        case ((nota_escala >= 4.6) && (nota_escala <= 5)):
            nota_escala = 6;
            break;
    }
    return nota_escala;
}
var probando = prueba(4.2)