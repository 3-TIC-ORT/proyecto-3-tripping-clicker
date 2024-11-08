let puntosT = 0
let puntosxs = 0
let poderclick = 1
let precio1  = 10
let precio2 = 100
let precio3 = 1000
let precio4 = 10000
let clicks = 0
let dimension = 3
let puntosD3 = 0
let puntosD1
let puntosd2



function maspuntos() {
    puntosD3 = puntosD3 + poderclick
    puntosT = puntosT + poderclick
    clicks = clicks + 1
    document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD3)}`
    document.getElementById("clicksTotales").innerHTML = `Clicks totales: ${clicks}`
    document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`
}

function mejoraunoprecio() {
    if (puntosD3 >= precio1) {
        puntosD3 = puntosD3 - precio1
        precio1 = precio1 * 1.25
        puntosxs = puntosxs + 0.05
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD3)}`
    }
}

function mejoradosprecio() {
    if (puntosD3 >= precio2) {
        puntosD3 = puntosD3 - precio2
        poderclick = poderclick + 0.5
        precio2 = precio2 * 1.25
        puntosxs = puntosxs + 0.5
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD3)}`
    }
}
function mejoratresprecio() {
    if (puntosD3 >= precio3) {
        puntosD3 = puntosD3 - precio3
        poderclick = poderclick
        precio3 = precio3 * 1.25
        puntosxs = puntosxs + 5
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD3)}`
    }
}
function mejoracuatroprecio() {
    if (puntosD3 >= precio4) {
        puntosD3 = puntosD3 - precio4
        precio4 = precio4 * 1.25
        puntosxs = puntosxs + 50
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD3)}`
    }
}

function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function bucleinfinito(){
    while (true) {
        puntosD3 = puntosD3 + puntosxs
        puntosT = puntosT + puntosxs
        puntosD3 = (puntosD3)
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD3)}`
        document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`
        await delay(500)          
    }}
    let num
    function numselect(){
        num = Math.floor(Math.random() * 3) + 1;
    }

    async function cambio(){
    while (true) {
        await delay(900000)
        numselect()
        if (num === dimension) {
            numselect()
        }else{
            dimension = num;
            guardar()
            await delay(10000)
            window.location.href=`index${num}.html`
        }
    }
}

const showstats = document.getElementById("statsmnu");
document.getElementById("stats").addEventListener('click', poner)
function poner(){
    showstats.style.display = "block";
}
const span = document.getElementsByClassName("close")[0];
span.addEventListener('click', sacar)
function sacar() {
    showstats.style.display = "none";
}

window.addEventListener('click', holaaa)
function holaaa(event) {
    if (event.target == statsmnu) {
        showstats.style.display = "none";
    }
}

const mainImg = document.querySelector('.mainimg');
let imgSize = 60;

mainImg.style.width = imgSize + '%';

document.getElementById('mainobj').addEventListener('mousedown', () => {
    imgSize -= 1;
    if (imgSize > 0) {
        mainImg.style.width = imgSize + '%';
    }
});

document.getElementById('mainobj').addEventListener('mouseup', () => {
    imgSize = 60;
    mainImg.style.width = imgSize + '%';
});

cambio()
bucleinfinito()

function cargado(){
    postData(`cargar`, {dimension}, (progreso) => {
    puntosD3 = math.floor(progreso.puntosD3)
    puntosT = progreso.puntosTot
    puntosxs = progreso.puntosXsegundo
    precio1 = progreso.precio1
    precio2 = progreso.precio2
    precio3 = progreso.precio3
    precio4 = progreso.precio4
    clicks = progreso.clicks
    poderclick = progreso.poderclick

    document.getElementById("puntos").innerHTML = `Puntos: ${math.floor(progreso.puntosD3)}`
    // En los comandos de abajo poner donde se escribe el valor y lo que se escribe (el valor ya está).
    document.getElementById("").innerHTML = `${progreso.puntosTot}`
    document.getElementById("").innerHTML = `${progreso.puntosXsegundo}`
    document.getElementById("").innerHTML = `${progreso.precio1}`
    document.getElementById("").innerHTML = `${progreso.precio2}`
    document.getElementById("").innerHTML = `${progreso.precio3}`
    document.getElementById("").innerHTML = `${progreso.precio4}`
    document.getElementById("").innerHTML = `${progreso.clicks}`
    document.getElementById("").innerHTML = `${progreso.poderclick}`
    });
}

function guardado() {
    postData(`guardar`,{dimension, puntosD3, puntosT, puntosxs, clicks, poderclick, precio1, precio2, precio3, precio4})
}

sacar()

document.getElementById("import").addEventListener("click", cargado)

document.getElementById("guardar").addEventListener("click", guardado);

document.getElementById("mejora1").addEventListener("click", mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click", mejoradosprecio);

document.getElementById("mejora3").addEventListener("click", mejoratresprecio);

document.getElementById("mejora4").addEventListener("click", mejoracuatroprecio);

document.getElementById("mainobj").addEventListener("click", maspuntos);
