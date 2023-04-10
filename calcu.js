let primerNumero = "";
let operadorLogico = "";
let segundoNumero = "";
let r = "";
/**function actualizarPrimerNumero(valor) {
    primerNumero = parseInt(valor);
    console.log(primerNumero)
} */

function numeros(valor) {
    if (operadorLogico == "") {
        primerNumero += valor;
        console.log(primerNumero);
    } else if (operadorLogico != "") {
        segundoNumero += valor;
        console.log(segundoNumero);
    }
    primerNumero = parseInt(primerNumero);
};

function actualizarOperadorLogico(operador) {
    if (primerNumero != "" || primerNumero == 0) {
        operadorLogico = operador;
        console.log(operadorLogico);
    }
};

function resultado() {
    segundoNumero = parseInt(segundoNumero);
    if (operadorLogico == "+") {
        r = primerNumero + segundoNumero;
        console.log(r);
    }
    else if (operadorLogico == "-") {
        r = primerNumero - segundoNumero;
        console.log(r);
    } else if (operadorLogico == "*") {
        r = primerNumero * segundoNumero;
        console.log(r);
    } else if (operadorLogico == "/") {
        r = primerNumero / segundoNumero;
        console.log(r);
    } else {
        console.log("Ingresar valores correctamente")
    };
    primerNumero = "";
    operadorLogico = "";
    segundoNumero = "";
};

function borrar() {
    primerNumero = "";
    segundoNumero = "";
    operadorLogico = "";
    r = "";
    console.clear();
};


