import fs from "fs";
import { onEvent, startServer } from "soquetic";

// Guardar
function guardarprogreso(dimension, puntosD, puntosT, puntosxs, precio1, precio2, precio3, precio4, clicks, poderclick) {
    // Guardar progreso de la dimensión 1
    if (dimension === 1) {
        const guardado = {
            "puntos": puntosD,
            "puntosTot": puntosT,
            "puntos por segundo": puntosxs,
            "mejora1": precio1,
            "mejora2": precio2,
            "mejora3": precio3,
            "mejora4": precio4,
            "clicks": clicks,
            "poderclick": poderclick,
        };
        fs.writeFileSync(`./Datos/Guardado.json`, JSON.stringify(guardado, null, 2), "utf8");
    }
    // Guardar progreso de la dimensión 2
    else if (dimension === 2) {
        const guardado2 = {
            "puntos": puntosD,
            "puntosTot": puntosT,
            "puntos por segundo": puntosxs,
            "mejora1": precio1,
            "mejora2": precio2,
            "mejora3": precio3,
            "mejora4": precio4,
            "clicks": clicks,
            "poderclick": poderclick,
        };
        fs.writeFileSync(`./Datos/Guardado2.json`, JSON.stringify(guardado2, null, 2), "utf8");
    }
    // Guardar progreso de la dimensión 3
    else if (dimension === 3) {
        const guardado3 = {
            "puntos": puntosD,
            "puntosTot": puntosT,
            "puntos por segundo": puntosxs,
            "mejora1": precio1,
            "mejora2": precio2,
            "mejora3": precio3,
            "mejora4": precio4,
            "clicks": clicks,
            "poderclick": poderclick,
        };
        fs.writeFileSync(`./Datos/Guardado3.json`, JSON.stringify(guardado3, null, 2), "utf8");
    } else {
        console.error("Hubo un error en el guardado");
    }
}

// Exportar
function cargarprogreso(dimension) {
    // Cargar progreso de la dimensión 1
    if (dimension === 1) {
        let progreso = JSON.parse(fs.readFileSync(`./Datos/Guardado.json`, "utf8"));
        return progreso;
    }
    // Cargar progreso de la dimensión 2
    else if (dimension === 2) {
        let progreso2 = JSON.parse(fs.readFileSync(`./Datos/Guardado2.json`, "utf8"));
        return progreso2;
    }
    // Cargar progreso de la dimensión 3
    else if (dimension === 3) {
        let progreso3 = JSON.parse(fs.readFileSync(`./Datos/Guardado3.json`, "utf8"));
        return progreso3;
    } else {
        console.error("Hubo un error en el cargado");
    }
}

onEvent(`guardar`, guardarprogreso);
onEvent(`cargar`, cargarprogreso);

startServer();
