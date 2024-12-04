import fs from "fs";
import { onEvent, startServer } from "soquetic";

let progreso = []
let demencia = JSON.parse(fs.readFileSync(`./Datos/dimension.json`,"utf8"));

// Guardar
onEvent(`guardar`, (data) => {

    const demenciasion = {
        "dimension": data.dimension
    }

    fs.writeFileSync(`./Datos/dimension.json`,JSON.stringify(demenciasion, null, 2), "utf8");
    // Guardar progreso de la dimensión 1
    if (demencia.dimension === 1) {
        const guardado = {
            "puntosD": data.puntosD,
            "puntosTot": data.puntosT,
            "puntosXsegundo": data.puntosxs,
            "precio1": data.precio1,
            "precio2": data.precio2,
            "precio3": data.precio3,
            "precio4": data.precio4,
            "clicks": data.clicks,
            "poderclick": data.poderclick,
        }; 
        fs.writeFileSync(`./Datos/Guardado1.json`, JSON.stringify(guardado, null, 2), "utf8");

    }
    // Guardar progreso de la dimensión 2
    else if (demencia.dimension === 2) {
        const guardado2 = {
            "puntosD": data.puntosD,
            "puntosTot": data.puntosT,
            "puntosXsegundo": data.puntosxs,
            "precio1": data.precio1,
            "precio2": data.precio2,
            "precio3": data.precio3,
            "precio4": data.precio4,
            "clicks": data.clicks,
            "poderclick": data.poderclick,
        };
        fs.writeFileSync(`./Datos/Guardado2.json`, JSON.stringify(guardado2, null, 2), "utf8");
    }
    // Guardar progreso de la dimensión 3
    else if (demencia.dimension === 3) {
        const guardado3 = {
            "puntosD": data.puntosD,
            "puntosTot": data.puntosT,
            "puntosXsegundo": data.puntosxs,
            "precio1": data.precio1,
            "precio2": data.precio2,
            "precio3": data.precio3,
            "precio4": data.precio4,
            "clicks": data.clicks,
            "poderclick": data.poderclick,
        };
        fs.writeFileSync(`./Datos/Guardado3.json`, JSON.stringify(guardado3, null, 2), "utf8");
    } 
    
    else {
        console.error("Hubo un error en el guardado");
    }
});

// Exportar
onEvent("cargar", () => {
    // Cargar progreso de la dimensión 1
    if (demencia.dimension === 1) {
        progreso = JSON.parse(fs.readFileSync(`./Datos/Guardado1.json`, "utf8"));
        return progreso
    }
    // Cargar progreso de la dimensión 2
    else if (demencia.dimension === 2) {
        progreso = JSON.parse(fs.readFileSync(`./Datos/Guardado2.json`, "utf8"));
        return progreso
    }
    // Cargar progreso de la dimensión 3
    else if (demencia.dimension === 3) {
        progreso = JSON.parse(fs.readFileSync(`./Datos/Guardado3.json`, "utf8"));
        return progreso
    } else {
        console.error("Hubo un error en el cargado");
    }

    return progreso;
});

startServer();