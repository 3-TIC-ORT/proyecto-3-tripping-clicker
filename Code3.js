let puntosT = 0
let puntosxs = 0
let poderclick = 1
let precio1  = 10
let precio2 = 100
let precio3 = 1000
let precio4 = 10000
let precio5 = 100000
let precio6 = 1000000
let clicks = 0
let dimension
let puntosD = 0


//funcion de gpt para redondear los eerores del calculo de js
function roundToDecimals(number, decimals) {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

//funcion que suma puntos en cada click
function maspuntos() {
    puntosD = roundToDecimals(puntosD + poderclick, 1)
    puntosT = roundToDecimals(puntosT + poderclick, 1)
    clicks = clicks + 1
    document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
    document.getElementById("puntosT").innerHTML = `Puntos totales: ${(puntosT)}`
    puntosD = roundToDecimals(puntosD, 1)
}

//funciones que hecen las mejorasa
function mejoraunoprecio() {
    if (puntosD >= precio1) {
        puntosD = roundToDecimals(puntosD - precio1, 1)
        precio1 = Math.ceil (precio1 * 1.15)
        puntosxs = roundToDecimals(puntosxs + 0.1, 1) 
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = roundToDecimals(puntosD - precio2, 1)
        poderclick = roundToDecimals(poderclick + 0.2, 1)
        precio2 = Math.ceil (precio2 * 1.15)
        puntosxs = roundToDecimals(puntosxs + 1.1, 1)
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}
function mejoratresprecio() {
    if (puntosD >= precio3) {
        puntosD = roundToDecimals(puntosD - precio3, 1)
        poderclick = roundToDecimals(poderclick + 3, 1)
        precio3 = Math.ceil (precio3 * 1.15)
        puntosxs = roundToDecimals(puntosxs + 12, 1)
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}
function mejoracuatroprecio() {
    if (puntosD >= precio4) {
        puntosD = roundToDecimals(puntosD - precio4, 1)
        poderclick = roundToDecimals(poderclick + 40, 1)
        precio4 = Math.ceil (precio4 * 1.15)
        puntosxs = roundToDecimals(puntosxs + 130, 1)
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}

function mejoracincoprecio() {
    if (puntosD >= precio5) {
        puntosD = roundToDecimals(puntosD - precio4, 1)
        poderclick = roundToDecimals(poderclick + 500, 1)
        precio5 = Math.ceil (precio5 * 1.15)
        puntosxs = roundToDecimals(puntosxs + 1400, 1)
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}

function mejoraseisprecio() {
    if (puntosD >= precio6) {
        puntosD = roundToDecimals(puntosD - precio6, 1)
        poderclick = roundToDecimals(poderclick + 7500, 1)
        precio6 = Math.ceil(precio6 * 1.15)
        puntosxs = roundToDecimals(puntosxs + 16000, 1)
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("pxs").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("poder").innerHTML = `Poder del click: ${poderclick}`
    }
}

//funciones para un bucle asincronico
function delay(timeInMs) {
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function bucleinfinito(){
    while (true) {
        puntosD = roundToDecimals(puntosD + puntosxs, 1)
        puntosT = roundToDecimals(puntosT + puntosxs, 1)
        document.getElementById("puntos").innerHTML = `Puntos: ${puntosD}`
        document.getElementById("puntosT").innerHTML = `Puntos totales: ${puntosT}`
        document.getElementById("clicksT").innerHTML = `clicks totales: ${clicks}`
        document.getElementById("poderClick").innerHTML = `Poder del click: ${poderclick}`
        document.getElementById("PXS").innerHTML = `Puntos por segundo: ${puntosxs}`
        document.getElementById("precio1").innerHTML = `${precio1}$`
        document.getElementById("precio2").innerHTML = `${precio2}$`
        document.getElementById("precio3").innerHTML = `${precio3}$`
        document.getElementById("precio4").innerHTML = `${precio4}$`
        document.getElementById("precio5").innerHTML = `${precio5}$`
        document.getElementById("precio6").innerHTML = `${precio6}$`
        await delay(1000)          
    }
}

//modal de las estadisticas 
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

window.addEventListener('click', cerrado)
function cerrado(event) {
    if (event.target == statsmnu) {
        showstats.style.display = "none";
    }
}

sacar()

//rebote del objeto cuando es clickeado
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


bucleinfinito()

//cargado de progreso

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
//guardado
function guardado() {
    postData(`guardar`,{dimension, puntosD, puntosT, puntosxs, clicks, poderclick, precio1, precio2, precio3, precio4})
}


//botones
document.getElementById("guardar").addEventListener("click", guardado);

document.getElementById("mejora1").addEventListener("click", mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click", mejoradosprecio);

document.getElementById("mejora3").addEventListener("click", mejoratresprecio);

document.getElementById("mejora4").addEventListener("click", mejoracuatroprecio);

document.getElementById("mejora5").addEventListener("click", mejoracincoprecio);

document.getElementById("mejora6").addEventListener("click", mejoraseisprecio);

document.getElementById("mainobj").addEventListener("click", maspuntos);


//llamado de funcionees
connect2Server()

cargado()


//cambio de dimension
let i = dimension

function randomnum(){
    i = Math.floor(Math.random() * 3) + 1;
}

async function cambio(){
    
    while ( i === dimension){
        await randomnum()
    }
    dimension = i
    await guardado()
    Window.location.href = `./index${dimension}.html`
}

setInterval(cambio(), 5000)