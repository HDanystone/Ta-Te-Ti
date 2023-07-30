import { useState } from "react"
import { TURNO, ESTADO, JUGADORES, PUNTAJE } from "./modulos/constantes"
import { InicioJuego } from "./componentes/InicioJuego"
import { Pantalla } from "./componentes/Pantalla"
import { Tablero } from "./componentes/Tablero"
import { Turno } from "./componentes/Turno"
import { FinJuego } from "./componentes/FinJuego"
import { chequeaEstadoJuego, actualizaTablero, actualizaPuntaje, declaraResultado, reseteaTablero } from "./modulos/estadosJuego"
import { turnoIADificil, turnoIAFacil } from "./modulos/InteligenciaArtificial"
import confetti from 'canvas-confetti'

export default function App() {
    const [tablero, setTablero] = useState(Array(9).fill(null))
    const [turno, setTurno] = useState(TURNO.x)
    const [estado, setEstado] = useState(ESTADO.noIniciado)
    const [puntaje, setPuntaje] = useState(PUNTAJE)
    const [jugadores, setJugadores] = useState(JUGADORES)

    function inicializarValores(nuevosJugadores) {
        setJugadores(nuevosJugadores)
        setTurno(nuevosJugadores.ficha)
        setEstado(ESTADO.enJuego)
    }
    
    const actualizaJuego = (index) => {
        if (tablero[index] || estado != ESTADO.enJuego) return
    const nuevoTablero = actualizaTablero(tablero,turno, index)
        setTablero(nuevoTablero)
        const nuevoEstado = chequeaEstadoJuego(nuevoTablero, turno)
        if (nuevoEstado != ESTADO.enJuego) {
            setEstado(nuevoEstado)
            declaraResultado()
            if (nuevoEstado===ESTADO.ganador){
            const nuevoPuntaje = actualizaPuntaje(puntaje, turno)
                setPuntaje(nuevoPuntaje)
                 confetti()
            }
        } else {
       const nuevoTurno = turno === TURNO.x ? TURNO.o : TURNO.x
            setTurno(nuevoTurno)
            }
     
    }
    const ia = jugadores.ia
    const humano = jugadores.ficha
    if (turno != humano && ia != '') {
        setTimeout(() => {
            let indice = ia === 'IAdificil' ? turnoIADificil(tablero, turno) : turnoIAFacil(tablero, turno)
            actualizaJuego(indice)
        }, 300)
    }

    const cambiar = () => {
        setEstado(ESTADO.noIniciado)
        setTablero(Array(9).fill(null))
        setPuntaje({ X: 0, O: 0 })
    }

    const reiniciar = () => {
        setTablero(Array(9).fill(null))
        setEstado(ESTADO.enJuego)
     reseteaTablero()
    }

    return (

        <main className='app' >
            {
                estado != ESTADO.noIniciado &&
                <section>
                    <Pantalla puntaje={puntaje} />
                    <Tablero tablero={tablero} actualizaJuego={actualizaJuego} />
                    <Turno turno={turno} />
                    <FinJuego resultado={estado} turno={turno} reiniciar={reiniciar} cambiar={cambiar} />
                </section>
            }
            {
                estado === ESTADO.noIniciado &&
                <section >
                    <InicioJuego inicializarValores={inicializarValores} />
                </section>
            }

        </main >

    )

}






