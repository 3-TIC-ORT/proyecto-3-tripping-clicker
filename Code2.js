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
        precio1 = precio1 * 1.24351243721454327814365493662493264763710746237463726578265328731627463741200174103824836214726156130761507360312756305763516278768132563527356075321635782638756321656301560132635165087538706150123578560283087560578632580532635023178565027358652813786156785067857671526887538067536078352706806783215087635128607352187608670870651237865238670876678358706325178602351087687621538762531876687102058670235186703520763250678086731257068351270863125780617860157067680850876352107853206875278510765068772130760150876612308762315760235672378662798703
        puntosxs = puntosxs + 0.001
    }
}

function mejoradosprecio() {
    if (puntosD >= precio2) {
        puntosD = puntosD - precio2
        precio2 = precio2 * 1.26984732987439827489327493287483749832740380724227622047826378423698745236343542364392543466278564357348265432556016078651837451368763751268195605279406594863476513651832647236472364923764977326498723649772369423647239874923874982374987239842364723609812734892134623796482677450652137657823752537891205118273503285050521238147532875452378153128745317826532153062513726573284352857950325237846327568327642988689326045782365784236187693286518793261524938785632985689168596254741692386598263573261576985362952635689236579326598836295624916573065
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

document.getElementById("mainobjdiv").addEventListener("click",maspuntos);

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