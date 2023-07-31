import { ESTADO, COMBINACIONES_GANADORAS } from './constantes'
import { chequeaEstadoJuego } from './estadosJuego'

export function turnoIAFacil(tablero, ia) {
    for (var i = 0; i < 2; i++) {
        let jugadorActual = i === 0 ? ia : ia === 'X' ? 'O' : 'X'
        for (const combinacion of COMBINACIONES_GANADORAS) {
            const [a, b, c] = combinacion
            if (tablero[a] === jugadorActual && tablero[b] === jugadorActual && tablero[c] === null)
                return c
            if (tablero[a] === jugadorActual && tablero[c] === jugadorActual && tablero[b] === null)
                return b
            if (tablero[c] === jugadorActual && tablero[b] === jugadorActual && tablero[a] === null)
                return a
        }
    }
    if (tablero[4] === null) return 4
    return juegaRandom(tablero)
}

export function turnoIADificil(tablero, player) {
    const ia = player
    const humano = ia === 'X' ? 'O' : 'X'
    if (tablero.every((cell) => cell === null)) return juegaRandom(tablero)
    const minimax = (nuevoTablero, jugador) => {
        let celdasDisponibles = cuentaCeldasVacias(nuevoTablero)
        if (chequeaEstadoJuego(nuevoTablero, humano) === ESTADO.ganador) {
            return {
                puntaje: -100
            }
        } else if (chequeaEstadoJuego(nuevoTablero, ia) === ESTADO.ganador) {
            return {
                puntaje: 100
            }
        } else if (chequeaEstadoJuego(nuevoTablero, ia) === ESTADO.empate) {
            return {
                puntaje: 0
            }
        }
        const posiblesJugadas = []
        for (let i = 0; i < celdasDisponibles.length; i++) {
            let jugada = {}
            jugada.indice = celdasDisponibles[i]

            nuevoTablero[celdasDisponibles[i]] = jugador
            if (jugador === ia) {
                jugada.puntaje = minimax(nuevoTablero, humano).puntaje
            } else {
                jugada.puntaje = minimax(nuevoTablero, ia).puntaje
            }
            nuevoTablero[celdasDisponibles[i]] = null
            posiblesJugadas.push(jugada)
        }
        let mejorJugada = 0
        if (jugador === ia) {
            let mejorPuntaje = -10000
            for (let i = 0; i < posiblesJugadas.length; i++) {
                if (posiblesJugadas[i].puntaje > mejorPuntaje) {
                    mejorPuntaje = posiblesJugadas[i].puntaje
                    mejorJugada = i
                }
            }
        } else {
            let mejorPuntaje = 10000
            for (let i = 0; i < posiblesJugadas.length; i++) {
                if (posiblesJugadas[i].puntaje < mejorPuntaje) {
                    mejorPuntaje = posiblesJugadas[i].puntaje
                    mejorJugada = i
                }
            }
        }
        return posiblesJugadas[mejorJugada]
    }
    return minimax(tablero, player).indice
}

const juegaRandom = (tablero) => {
    const celdasLibres = cuentaCeldasVacias(tablero)
    let x = Math.floor(Math.random() * celdasLibres.length)
    return celdasLibres[x]
}

export function cuentaCeldasVacias(tablero) {
    let array = []
    tablero.forEach((elemento, indice) => {
        if (elemento === null) array.push(indice)
    })
    return array
}
