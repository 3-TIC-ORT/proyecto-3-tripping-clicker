import fs from "fs"

// Guardar
function guardarprogreso() {
    const guardado = {
        "puntos": puntosD,
        "puntos por segundo": puntosxs,
        "mejora 1": precio1,
        "mejora 2": precio2,
    }
    fs.writeFileSync(`./Datos/Guardado.json`,JSON.stringify(guardado,null,2)`utf8`);
}

//Exportar

function cargarprogreso () {
    let progreso = JSON.parse(fs.readFileSync(`./Datos/Guardado.json`,"utf8"));
    return progreso
}

onEvent(`1`,guardarprogreso)

onEvent(`2`,cargarprogreso)

startServer()