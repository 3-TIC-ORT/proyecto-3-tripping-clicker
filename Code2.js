let puntosD = 0
let puntosxs = 0
let poderclick = 1
let precio1 = 10
let precio2 = 100
let clicks = 0



function maspuntos() {
    puntosD = puntosD + poderclick
    clicks = clicks + 1
    document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
}

function mejoraunoprecio() {
    if (puntosD >= precio1) {
        puntosD = puntosD - precio1
        precio1 = precio1 * 1.25
        puntosxs = puntosxs + 0.05
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = puntosD - precio2
        precio2 = precio2 * 1.25
        puntosxs = puntosxs + 0.5
    }
}

function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function bucleinfinito(){
    while (true) {

        puntosD = puntosD + puntosxs
        puntosD = (puntosD)
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        await delay(500)     
        console.log (puntosD)
        
    }
}
bucleinfinito()

document.getElementById("mejora1").addEventListener("click",mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click",mejoradosprecio);

document.getElementById("mainobj").addEventListener("click",maspuntos);
