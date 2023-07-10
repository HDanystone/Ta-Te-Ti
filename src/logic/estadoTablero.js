import { COMBINACIONES_GANADORAS, RESULTADO } from '../constants.js'

export const analizarResultado = (analizarTablero) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combinaciones of COMBINACIONES_GANADORAS) {
        const [a, b, c] = combinaciones
        if (
            analizarTablero[a] &&
            analizarTablero[a] === analizarTablero[b] &&
            analizarTablero[a] === analizarTablero[c]
        ) {
            return analizarTablero[a]
        }
    }
    // si no hay ganador
    return null
}

export const finalDeJuego = (nuevoTablero) => {

    // si no hay más espacios vacíos
    // en el tablero, hay un empate
    return nuevoTablero.every((cuadrado) => cuadrado !== null)
}