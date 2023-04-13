let primerNumero = "";
let operadorLogico = "";
let segundoNumero = "";
let r = "";

let visor = document.getElementById("display");

function numeros(valor) {
    if (operadorLogico == "") {
        primerNumero += valor;
        visor.value = primerNumero;
    } else if (operadorLogico != "") {
        segundoNumero += valor;
        visor.value = primerNumero + " " + operadorLogico + " " + segundoNumero;
    }
};

function actualizarOperadorLogico(operador) {
    if (primerNumero != "" && segundoNumero == "") {
        operadorLogico = operador;
        visor.value = primerNumero + " " + operadorLogico;
    }
};

function resultado() {
    if (segundoNumero != "" && primerNumero != "") {
        primerNumero = parseFloat(primerNumero);
        segundoNumero = parseFloat(segundoNumero);
        if (operadorLogico == "+") {
            r = primerNumero + segundoNumero;
        } else if (operadorLogico == "-") {
            r = primerNumero - segundoNumero;
        } else if (operadorLogico == "*") {
            r = primerNumero * segundoNumero;
        } else if (operadorLogico == "/") {
            r = primerNumero / segundoNumero;
        }; /**
        if(r > 10000) {
            r = r.toPrecision(3)
        } else if(r < 0.0001) {
            r = r.toPrecision(3)
        }
        visor.value = primerNumero + " " + operadorLogico + " " + segundoNumero + " " + "= " + r.toFixed(2); */
        /** VAMOS A HACER NUMEROS DECIMALES CON 2 DIGITOS */
        if (r % 1 != 0) {
            r = r.toPrecision(3);
        }
        visor.value = r;
        primerNumero = "";
        operadorLogico = "";
        segundoNumero = "";
    }
};

function borrar() {
    primerNumero = "";
    segundoNumero = "";
    operadorLogico = "";
    r = "";
    visor.value = "";
};


