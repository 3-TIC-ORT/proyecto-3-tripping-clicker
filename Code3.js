let puntosT = 0
let puntosxs = 0
let poderclick = 1
let precio1  = 10
let precio2 = 100
let precio3 = 1000
let precio4 = 10000
let clicks = 0
let dimension = 3
let puntosD = 0



function maspuntos() {
    puntosD = puntosD + poderclick
    puntosT = puntosT + poderclick
    clicks = clicks + 1
    document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
    document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`
}

function mejoraunoprecio() {
    if (puntosD >= precio1) {
        puntosD = puntosD - precio1
        precio1 = precio1 * 1.25
        puntosxs = puntosxs + 0.05
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs * 2}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = puntosD - precio2
        poderclick = poderclick + 0.5
        precio2 = precio2 * 1.25
        puntosxs = puntosxs + 0.5
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs * 2}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}
function mejoratresprecio() {
    if (puntosD >= precio3) {
        puntosD = puntosD - precio3
        poderclick = poderclick
        precio3 = precio3 * 1.25
        puntosxs = puntosxs + 5
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs * 2}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}
function mejoracuatroprecio() {
    if (puntosD >= precio4) {
        puntosD = puntosD - precio4
        precio4 = precio4 * 1.25
        puntosxs = puntosxs + 50
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs * 2}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
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
        document.getElementById("puntos").innerHTML = `Puntos: ${Math.floor (puntosD)}`
        document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`   
        document.getElementById("puntosT").innerHTML = `Puntos totales: ${Math.floor (puntosT)}`
        document.getElementById("clicksT").innerHTML = `clicks totales: ${clicks}`
        document.getElementById("poderClick").innerHTML = `Poder del click: ${poderclick}`
        document.getElementById("PXS").innerHTML = `Poder del click: ${puntosxs}`
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
            await delay(3000)
            window.location.href=`index${num}.html`
            cargado()
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

window.addEventListener('click', hola)
function hola(event) {
    if (event.target == statsmnu) {
        showstats.style.display = "none";
    }
}

sacar()

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
    postData("cargar", {dimension}, (data) => {
    console.log(data)
    puntosD = data.puntosD;
    puntosT = data.puntosTot;
    puntosxs = data.puntosXsegundo;
    precio1 = data.precio1;
    precio2 = data.precio2;
    precio3 = data.precio3;
    precio4 = data.precio4;
    clicks = data.clicks;
    poderclick = data.poderclick;

    document.getElementById("puntos").innerHTML = `Puntos: ${data.puntosD}`
    // En los comandos de abajo poner donde se escribe el valor y lo que se escribe (el valor ya está).
  
    });
}

function guardado() {
    postData(`guardar`,{dimension, puntosD, puntosT, puntosxs, clicks, poderclick, precio1, precio2, precio3, precio4})
}

document.getElementById("guardar").addEventListener("click", guardado);

document.getElementById("mejora1").addEventListener("click", mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click", mejoradosprecio);

document.getElementById("mejora3").addEventListener("click", mejoratresprecio);

document.getElementById("mejora4").addEventListener("click", mejoracuatroprecio);

document.getElementById("mainobj").addEventListener("click", maspuntos);

connect2Server()

cargado()