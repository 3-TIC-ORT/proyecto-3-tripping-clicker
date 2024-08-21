let puntos = 0
let puntosxs = 0
let poderclick = 1
let precio1 = 10

function maspuntos() {
    puntos = puntos + poderclick
    console.log (puntos)
}

function mejoraunoprecio() {
    if (puntos >= precio1) {
        puntos = puntos - precio1
        precio1 = precio1 + 10
        puntosxs = puntosxs + 1
    }
}

function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}
async function bucleiinfinito(){
while (true) {

    puntos = puntos + puntosxs
    console.log (puntos)
    await delay(1000)
    
}
}
bucleiinfinito()

document.getElementById("mejora1").addEventListener("click",mejoraunoprecio);

document.getElementById("mainobjdiv").addEventListener("click",maspuntos);