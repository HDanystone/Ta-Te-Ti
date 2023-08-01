import { COMBINACIONES_GANADORAS, ESTADO } from './constantes'

export function chequeaEstadoJuego(tablero, jugadorActual) {
    if (
        COMBINACIONES_GANADORAS.some((combinacion) =>
            combinacion.every((celda) => tablero[celda] === jugadorActual)
        )
    )
        return ESTADO.ganador
    if (tablero.every((celda) => celda != null)) return ESTADO.empate
    return ESTADO.enJuego
}

export function actualizaTablero(tablero, turno, indice) {
    let celda = document.getElementById(indice)
    const nuevoTablero = [...tablero]
    nuevoTablero[indice] = turno
    celda.classList.add(turno)
    return nuevoTablero
}

export function muestraModal() {
    setTimeout(() => {
        let modal = document.getElementById('modal')
        modal.classList.toggle('visible')
    }, 200)
}

export function actualizaPuntaje(puntaje, turno) {
    const nuevoPuntaje = { ...puntaje }
    nuevoPuntaje[turno] += 1
    return nuevoPuntaje
}

export function reseteaTablero() {
    const celdas = document.querySelectorAll('.celda')
    celdas.forEach((celda) => {
        celda.classList.remove('X'), celda.classList.remove('O')
    })
    let modal = document.getElementById('modal')
    modal.classList.toggle('visible')
}
