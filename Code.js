let puntos = 0
let puntosxs = 0
let poderclick = 1

function maspuntos() {
    puntos = puntos + poderclick
    console.log (puntos)
}

function mejoraunoprecio(){
    if (puntos>=10) {
        puntos = puntos-10
        console.log (puntos,"puntos")
        puntosxs = puntosxs+1
        console.log (puntosxs, "pps")
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


document.getElementById("mejora1").addEventListener("click",mejoraunoprecio)


document.getElementById("mainobjdiv").addEventListener("click",maspuntos);