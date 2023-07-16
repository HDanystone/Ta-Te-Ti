import { COMBINACIONES_GANADORAS} from '../constants.js'

export const analizarResultado = (tablero) => {

    // revisamos todas las combinaciones ganadoras
    // para ver si X u O gano
    for (const combinaciones of COMBINACIONES_GANADORAS) {
        
        const [a, b, c] = combinaciones
        
        if (
            tablero[a] &&
            tablero[a] === tablero[b] &&
            tablero[a] === tablero[c]
        ) {
            return tablero[a]
        }
    }
    
    //si no hay ganador 
    return null
}

export const turnoMaquina = (tablero, turnoPC, turnoJugador) => {
  var masProbabilidades =[]
    for (let i = 0; i < 2; i++) {
      
        for (const combinaciones of COMBINACIONES_GANADORAS) {
            const [a, b, c] = combinaciones
    
   
            var turnoActual = (i === 0) ? turnoPC : turnoJugador
  
            if (tablero[a] === turnoActual && tablero[c] === turnoActual
                && tablero[b] === null) return b
            if (tablero[a] === turnoActual && tablero[b] === turnoActual
                && tablero[c] === null) return c
            if (tablero[b] === turnoActual && tablero[c] === turnoActual
                && tablero[a] === null) return a
            }
        }
    if (tablero[4] === null) return 4
 
        tablero.forEach((e, index) => { e === null ? masProbabilidades.push(index) : null })

        let i = Math.floor(Math.random() * masProbabilidades.length)
    
   
    return masProbabilidades[i]
}






export const finalDeJuego = (nuevoTablero) => {

    // si no hay más espacios vacíos
    // en el tablero, hay un empate
    return nuevoTablero.every((cuadrado) => cuadrado !== null)
}