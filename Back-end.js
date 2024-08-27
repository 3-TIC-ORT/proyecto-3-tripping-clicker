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

localStorage.getItem("puntos",puntosD);
localStorage.getItem("puntos por segundo",puntosxs);
localStorage.getItem("precio mejora 1",precio1);
localStorage.getItem("precio mejora 2",precio2);

export { guardarprogreso }