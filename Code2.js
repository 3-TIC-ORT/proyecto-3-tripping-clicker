let puntosD = 0
let puntosxs = 0
let poderclick = 1
let precio1 = 10
let precio2 = 100
let clicks = 0

Cargarprogreso()


function maspuntos() {
    puntosD = puntosD + poderclick
    clicks = clicks + 1
}

function mejoraunoprecio() {
    if (puntosD >= precio1) {
        puntosD = puntosD - precio1
        precio1 = precio1 * 1.25
        puntosxs = puntosxs + 0.01
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = puntosD - precio2
        precio2 = precio2 * 1.25
        puntosxs = puntosxs + 0.1
    }
}

function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function bucleinfinito(){
    while (true) {

        puntosD = puntosD + puntosxs
        puntosD = (puntosD)
        document.getElementById("Puntos").innerHTML = `Puntos: ${Math.ceil (puntosD)}`
        await delay(100)
        console.log (puntosD)
        
    }
}
bucleinfinito()

document.getElementById("mejora1").addEventListener("click",mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click",mejoradosprecio);

document.getElementById("mainobj").addEventListener("click",maspuntos);

document.getElementById("guardar").addEventListener("click",guardarprogreso);



async function Autoguardado() {
    await delay(300000)
    document.addEventListener(guardarprogreso)
}
Autoguardado()

// Guardar

function guardarprogreso() { 


}


//Importar
async function Cargarprogreso () {

}

//Exportar
function cargarprogreso () {

}
