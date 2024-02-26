let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroDeUsusario = parseInt(document.getElementById ('valorUsuario').value);
    console.log(numeroDeUsusario === numeroSecreto);
    if (numeroDeUsusario === numeroSecreto) {
        asignarTextoElemento ('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto.
        if (numeroDeUsusario > numeroSecreto) {
            asignarTextoElemento ('p', 'el numero secreto es menor');
        } else{
            asignarTextoElemento ('p', 'el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio de intervalo de numeros
    condicionesIniciales();
    //generar el numero alatorio
    //dejar el boton de nuevo juego desavilitado
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //indicar el numeero de intentos
}

condicionesIniciales();
