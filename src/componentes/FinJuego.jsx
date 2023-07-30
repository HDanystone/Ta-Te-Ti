import '../App.css'

import { ESTADO } from '../modulos/constantes'
export function FinJuego({ resultado, turno, reiniciar, cambiar }) { 
    const ganador = resultado===ESTADO.ganador? turno : null
    const handleClick = (e) => {
    return    e.target.name === 'cambiar'? cambiar() : reiniciar()
}



    return (
        <div id = 'modal' className='modal'>
        <div className="form">
            <div className='divs'>
                <label className='lbl ganador' >{resultado}</label>
                <label className={`lbl Ficha ${turno}`}>{ganador}</label>
                <label className='lbl ganador' >!!!</label>
                </div>
                <div>
            <button className='boton' name='reiniciar' onClick={handleClick}>Reiniciar</button>
            <button className='boton' name='cambiar' onClick={handleClick}>Modificar</button>
                </div>
            </div>
        </div>
    )
}