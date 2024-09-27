let puntosD = 0
let puntosT = 0
let puntosxs = 0
let poderclick = 1
let precio1 = 10
let precio2 = 100
let precio3 = 1000
let precio4 = 10000
let clicks = 0
let dimension = 1



function maspuntos() {
    puntosD = puntosD + poderclick
    puntosT = puntosT + poderclick
    clicks = clicks + 1
    document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
    document.getElementById("clicksTotales").innerHTML = `Clicks totales: ${clicks}`
    document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`
}

function mejoraunoprecio() {
    if (puntosD >= precio1) {
        puntosD = puntosD - precio1
        precio1 = precio1 * 1.25
        puntosxs = puntosxs + 0.05
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = puntosD - precio2
        precio2 = precio2 * 1.25
        puntosxs = puntosxs + 0.5
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
    }
}
function mejoratresprecio() {
    if (puntosD >= precio3) {
        puntosD = puntosD - precio3
        precio3 = precio3 * 1.25
        puntosxs = puntosxs + 5
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
    }
}
function mejoracuatroprecio() {
    if (puntosD >= precio4) {
        puntosD = puntosD - precio4
        precio4 = precio4 * 1.25
        puntosxs = puntosxs + 50
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
    }
}

function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function bucleinfinito(){
    while (true) {

        puntosD = puntosD + puntosxs
        puntosT = puntosT + puntosxs
        puntosD = (puntosD)
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`
        await delay(500)     
        console.log (puntosD)
        
    }
}
bucleinfinito()

document.getElementById("mejora1").addEventListener("click",mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click",mejoradosprecio);

document.getElementById("mejora3").addEventListener("click",mejoratresprecio);

document.getElementById("mejora4").addEventListener("click",mejoracuatroprecio);

document.getElementById("mainobj").addEventListener("click",maspuntos);
