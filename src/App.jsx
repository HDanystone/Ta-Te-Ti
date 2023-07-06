import { useState } from 'react'
import './index.css'
import { Cuadrado } from './Component/Cuadrado.jsx'
import { TURNO, RESULTADO, COMBINACIONES_GANADORAS } from './constants'
import { analizarResultado, finalDeJuego } from './logic/tablero'
import confetti from 'canvas-confetti'
import { GanadorModal } from './Component/GanadorModal.jsx'

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNO.X)
  const [resultado, setResultado] = useState(RESULTADO.enJuego)

  const actualizaTablero = (index) => {
    //si ya hay X u O no hace nada
    if (tablero[index] || resultado !== RESULTADO.enJuego) return
    //actualiza el estado del tablero
    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)
    //actualiza a quien le toca
    const nuevoTurno = turno === TURNO.X ? TURNO.O : TURNO.X
    setTurno(nuevoTurno)
    //se fija si hay ganador
    const nuevoGanador = analizarResultado(nuevoTablero)
    if (nuevoGanador) {
      confetti()
      setResultado(RESULTADO.ganador + nuevoGanador)
    } else if (finalDeJuego(nuevoTablero)) {
      setResultado(RESULTADO.empate) // empate
    }
  }
  //regresa al estado inicial
  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNO.X)
    setResultado(RESULTADO.enJuego)

    //resetGameStorage()
  }

  return (
    <>
      <main className='tablero'>
        <h1>Ta-Te-Ti en Vite + React</h1>
        <section className='juego'>
          {tablero.map((cuadrado, index) => {
            return (
              <Cuadrado key={index} index={index} hijo={cuadrado} actualizaTablero={actualizaTablero}>

              </Cuadrado>
            )
          })}
        </section>
        <section className='turno'>
          <Cuadrado seleccionado={turno === TURNO.X} hijo={TURNO.X}>

          </Cuadrado>
          <Cuadrado seleccionado={turno === TURNO.O} hijo={TURNO.O}>

          </Cuadrado>
        </section>
        {resultado !== RESULTADO.enJuego && (
          <section>
            <GanadorModal reiniciarJuego={reiniciarJuego} ganador={resultado} />
          </section>
        )}
      </main>
    </>
  )
}



export default App
