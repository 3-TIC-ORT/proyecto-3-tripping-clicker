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

async function cargado(){
    await postData("cargar", {dimension}, (data) => {
    console.log(data);
    console.log(data.puntosD3);
    puntosD3 = data.puntosD3;
    puntosT = data.puntosTot;
    puntosxs = data.puntosXsegundo;
    precio1 = data.precio1;
    precio2 = data.precio2;
    precio3 = data.precio3;
    precio4 = data.precio4;
    clicks = data.clicks;
    poderclick = data.poderclick;
    console.log(data);

    document.getElementById("puntos").innerHTML = `Puntos: ${data.puntosD3}`
    // En los comandos de abajo poner donde se escribe el valor y lo que se escribe (el valor ya está).
  
    });
}

function guardado() {
    postData(`guardar`,{dimension, puntosD3, puntosT, puntosxs, clicks, poderclick, precio1, precio2, precio3, precio4})
}

sacar()

document.getElementById("import").addEventListener("click", cargado);

document.getElementById("guardar").addEventListener("click", guardado);

document.getElementById("mejora1").addEventListener("click", mejoraunoprecio);

document.getElementById("mejora2").addEventListener("click", mejoradosprecio);

document.getElementById("mejora3").addEventListener("click", mejoratresprecio);

document.getElementById("mejora4").addEventListener("click", mejoracuatroprecio);

document.getElementById("mainobj").addEventListener("click", maspuntos);
