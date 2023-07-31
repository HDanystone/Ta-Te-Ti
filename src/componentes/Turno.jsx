import '../App.css'
import { TURNO } from '../modulos/constantes'

export function Turno({ turno }) {
    return (
        <div className='contenedorTurno'>
            <label id='lblTurno' className={`turno ${turno === TURNO.x ? 'X' : null}`}>
                X
            </label>
            <label className='textoTurno'>Turno actual</label>
            <label id='lblTurno' className={`turno ${turno === TURNO.o ? 'O' : null}`}>
                O
            </label>
        </div>
    )
}
