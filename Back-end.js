import fs from "fs"

// Guardar
function guardarprogreso() {
    // Guardar progreso de la dimensión 1
    if (dimension = 1) {
        const guardado = {
            "puntos": puntosD,
            "puntos por segundo": puntosxs,
            "mejora 1": precio1,
            "mejora 2": precio2,
        }
        fs.writeFileSync(`./Datos/Guardado.json`,JSON.stringify(guardado,null,2)`utf8`);
    }
    // Guardar progreso de la dimensión 2
    else if (dimension = 2) {
            const guardado2 = {
                "puntos": puntosD,
                "puntos por segundo": puntosxs,
                "mejora 1": precio1,
                "mejora 2": precio2,
            }
            fs.writeFileSync(`./Datos/Guardado2.json`,JSON.stringify(guardado2,null,2)`utf8`);
    }
    // Guardar progreso de la dimensión 3
    else if (dimension = 3) {
        const guardado3 = {
            "puntos": puntosD,
            "puntos por segundo": puntosxs,
            "mejora 1": precio1,
            "mejora 2": precio2,
        }
        fs.writeFileSync(`./Datos/Guardado3.json`,JSON.stringify(guardado3,null,2)`utf8`);
    }
    else {
        alert("hiciste algo mal")
    }
}

//Exportar

function cargarprogreso () {
    // Cargar progreso de la dimensión 1
    if (dimension = 1) {
        let progreso = JSON.parse(fs.readFleSync(`./Datos/Guardado.json`,"utf8"));
        return progreso
    }
    // Cargar progreso de la dimensión 2
    else if (dimension = 2) {
        let progreso2 = JSON.parse(fs.readFleSync(`./Datos/Guardado2.json`,"utf8"));
        return progreso2
    }
    // Cargar progreso de la dimensión 3
    else if (dimension = 3) {
        let progreso3 = JSON.parse(fs.readFleSync(`./Datos/Guardado3.json`,"utf8"));
        return progreso3
    }
    else {
        alert("hiciste algo mal (pt 2)")
    }
}

onEvent(`guardar`,guardarprogreso)

onEvent(`cargar`,cargarprogreso)

startServer()