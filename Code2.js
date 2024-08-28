let puntosD = 0
let puntosxs = 0
let poderclick = 1
let precio1 = 10
let precio2 = 100
let clicks = 0

function maspuntos() {
    puntosD = puntosD + poderclick
    clicks = clicks + 1
}

function mejoraunoprecio() {
    if (puntosD >= precio1) {
        puntosD = puntosD - precio1
        precio1 = precio1 * 1.25
        puntosxs = puntosxs + 0.001
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = puntosD - precio2
        precio2 = precio2 * 1.25
        puntosxs = puntosxs + 0.01
    }
}

function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function bucleiinfinito(){
while (true) {

    puntosD = puntosD + puntosxs
    document.getElementById("Puntos").innerHTML = `Puntos ${Math.ceil(puntosD)}`
    await delay(10)
    
}
}
bucleiinfinito()

document.getElementById("mejora1").addEventListener("click",mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click",mejoradosprecio);

document.getElementById("mainobj").addEventListener("click",maspuntos);

document.getElementById("guardar").addEventListener("click",guardarprogreso);

async function Autoguardado() {
    await delay(300000)
    document.addEventListener(guardarprogreso)
}
Autoguardado()

const {LocalStorage} = require("node-localstorage");

const localstorage = new LocalStorage("./Users/49375882/Documents/GitHub/proyecto-3-tripping-clicker");
 
// Guardar

function guardarprogreso() { 
    localStorage.setItem("clicks",clicks)
    localStorage.setItem("puntos",puntosD);
    localStorage.setItem("puntos por segundo",puntosxs);
    localStorage.setItem("cantidad mejoras 1"); 
    localStorage.setItem("cantidad mejoras 2");
    localStorage.setItem("cantidad mejoras 3");
    localStorage.setItem("cantidad mejoras 4");
    localStorage.setItem("cantidad mejoras 5");
    localStorage.setItem("cantidad mejoras 6");
    localStorage.setItem("cantidad mejoras 7");
    localStorage.setItem("cantidad mejoras 8");
    localStorage.setItem("cantidad mejoras 9");
    localStorage.setItem("cantidad mejoras 10");
    localStorage.setItem("cantidad mejoras 11");
    localStorage.setItem("cantidad mejoras 12");
    localStorage.setItem("cantidad mejoras 13");
    localStorage.setItem("cantidad mejoras 14");
    localStorage.setItem("cantidad mejoras 15");
    localStorage.setItem("cantidad mejoras 16");
    localStorage.setItem("precio mejora 1",precio1);
    localStorage.setItem("precio mejora 2",precio2);
    localStorage.setItem("precio mejora 3");
    localStorage.setItem("precio mejora 4");
    localStorage.setItem("precio mejora 5");
    localStorage.setItem("precio mejora 6");
    localStorage.setItem("precio mejora 7");
    localStorage.setItem("precio mejora 8");
    localStorage.setItem("precio mejora 9");
    localStorage.setItem("precio mejora 10");
    localStorage.setItem("precio mejora 11");
    localStorage.setItem("precio mejora 12");
    localStorage.setItem("precio mejora 13");
    localStorage.setItem("precio mejora 14");
    localStorage.setItem("precio mejora 15");
    localStorage.setItem("precio mejora 16");
}

//Exportar
function cargarprogreso () {
    localStorage.getItem("clicks",clicks)
    localStorage.getItem("puntos",puntosD);
    localStorage.getItem("puntos por segundo",puntosxs);
    localStorage.getItem("cantidad mejoras 1");
    localStorage.getItem("cantidad mejoras 2");
    localStorage.getItem("cantidad mejoras 3");
    localStorage.getItem("cantidad mejoras 4");
    localStorage.getItem("cantidad mejoras 5");
    localStorage.getItem("cantidad mejoras 6");
    localStorage.getItem("cantidad mejoras 7");
    localStorage.getItem("cantidad mejoras 8");
    localStorage.getItem("cantidad mejoras 9");
    localStorage.getItem("cantidad mejoras 10");
    localStorage.getItem("cantidad mejoras 11");
    localStorage.getItem("cantidad mejoras 12");
    localStorage.getItem("cantidad mejoras 13");
    localStorage.getItem("cantidad mejoras 14");
    localStorage.getItem("cantidad mejoras 15");
    localStorage.getItem("cantidad mejoras 16");
    localStorage.getItem("precio mejora 1",precio1);
    localStorage.getItem("precio mejora 2",precio2);
    localStorage.getItem("precio mejora 3");
    localStorage.getItem("precio mejora 4");
    localStorage.getItem("precio mejora 5");
    localStorage.getItem("precio mejora 6");
    localStorage.getItem("precio mejora 7");
    localStorage.getItem("precio mejora 8");
    localStorage.getItem("precio mejora 9");
    localStorage.getItem("precio mejora 10");
    localStorage.getItem("precio mejora 11");
    localStorage.getItem("precio mejora 12");
    localStorage.getItem("precio mejora 13");
    localStorage.getItem("precio mejora 14");
    localStorage.getItem("precio mejora 15");
    localStorage.getItem("precio mejora 16");
}