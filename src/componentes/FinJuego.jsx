import '../App.css'
import confetti from 'canvas-confetti'
import { ESTADO } from '../modulos/constantes'
export function FinJuego({ resultado, turno, reiniciar, cambiar }) {
    const textoGanador = resultado === ESTADO.ganador ? `${resultado}:` : resultado
    const ganador = resultado === ESTADO.ganador ? turno : null

    const handleClick = (e) => {
        return e.target.name === 'cambiar' ? cambiar() : reiniciar()
    }
    resultado === ESTADO.ganador ? confetti() : null
    return (
        <div id='modal' className='modal'>
            <div className='form fin'>
                <div className='divs'>
                    <label className='lbl ganador'>{textoGanador}</label>
                    <label className={`lbl Ficha ${turno}`}>{ganador}</label>
                    <label className='lbl ganador'>!</label>
                </div>
                <div>
                    <button className='boton' name='reiniciar' onClick={handleClick}>
                        Reiniciar
                    </button>
                    <button className='boton' name='cambiar' onClick={handleClick}>
                        Modificar
                    </button>
                </div>
            </div>
        </div>
    )
}
