import '../App.css'

export function Pantalla({ puntaje }) {
    return (
        <div className='pantalla'>
            <div className='contenedorPuntaje'>
                <label className='textoJugador X'>X</label>
                <label className='puntaje X'>{`:${puntaje.X}`}</label>
            </div>
            <div className='contenedorPuntaje'>
                <label className='textoJugador O'>O</label>
                <label className='puntaje O'>{`:${puntaje.O}`}</label>
            </div>
        </div>
    )
}
