import { useState } from 'react'
import './index.css'
import { Cuadrado } from './Component/Cuadrado.jsx'
import { TURNO, RESULTADO} from './constants'
import { analizarResultado, finalDeJuego, turnoMaquina } from './logic/estadoTablero'
import confetti from 'canvas-confetti'
import { GanadorModal } from './Component/GanadorModal.jsx'

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNO.X)
  const [resultado, setResultado] = useState(RESULTADO.enJuego)
  const [puntaje, setPuntaje] = useState({ X: 0, O: 0 })
  const [jugador, setJugador] = useState(TURNO.X)

  const actualizaTablero = (index) => {
    //si ya hay X u O no hace nada
    if (tablero[index] || resultado !== RESULTADO.enJuego) return
    //actualiza el estado del tablero
   var nuevoTablero = [...tablero]
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
      const nuevoPuntaje = { ...puntaje }
      nuevoPuntaje[nuevoGanador] += 1
      setPuntaje(nuevoPuntaje)
    } else if (finalDeJuego(nuevoTablero)) {
      setResultado(RESULTADO.empate) // empate
    } 
   
  }

  if (turno != jugador) {
    setTimeout(() => { 
   let indice = turnoMaquina(tablero, TURNO.O, TURNO.X)
      actualizaTablero(indice)
}, 80);   
      
     
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
        <section className ='puntaje'>
          <section className ='turno puntaje'>
          <Cuadrado  texto ='X:'> </Cuadrado>
          <Cuadrado seleccionado =  {true}texto={puntaje.X}> </Cuadrado>
          </section>
          <section className ='turno puntaje'>
          <Cuadrado texto ='O:'> </Cuadrado>
          <Cuadrado seleccionado = {true} texto={puntaje.O}> </Cuadrado>
        </section>
        </section>
        <section className='juego'>
          {tablero.map((contenido, index) => {
            return (
              <Cuadrado key={index} index={index} texto={contenido} actualizaTablero={actualizaTablero}>

              </Cuadrado>
            )
          })}
        </section>
        <section className='turno'>
          <Cuadrado seleccionado={turno === TURNO.X} texto={TURNO.X}>

                </Cuadrado>
          <Cuadrado seleccionado={turno === TURNO.O} texto={TURNO.O}>

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
