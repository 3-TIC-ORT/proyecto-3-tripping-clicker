import { guardarprogreso } from './'


let puntosD = 0
let puntosxs = 0
let poderclick = 1
let precio1 = 10
let precio2 = 100

function maspuntos() {
    puntosD = puntosD + poderclick
    console.log (puntosD)
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

document.getElementById("").addEventListener(Cargarprogreso)



const {LocalStorage} = require("node-localstorage");

const localstorage = new LocalStorage("./Users/49375882/Documents/GitHub/proyecto-3-tripping-clicker");
 
// Guardar

function guardarprogreso() { 
    localStorage.setItem("puntos",puntosD);
    localStorage.setItem("puntos por segundo",puntosxs);
    localStorage.setItem("precio mejora 1",precio1);
    localStorage.setItem("precio mejora 2",precio2);
}

//Exportar
function Cargarprogreso () {
    localStorage.getItem("puntos",puntosD);
localStorage.getItem("puntos por segundo",puntosxs);
localStorage.getItem("precio mejora 1",precio1);
localStorage.getItem("precio mejora 2",precio2);
}