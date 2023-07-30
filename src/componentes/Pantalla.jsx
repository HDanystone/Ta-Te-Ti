import "../App.css";

export function Pantalla({ puntaje }) {

    return (
        <div className='pantalla'>

            <label className='textoJugador'>X:</label>
            <div className='contenedorPuntaje'>
                <label className='puntaje X'>{puntaje.X}</label>
            </div>
            <label className='textoPantalla'> Puntaje </label>
            <label className='textoJugador'>O:</label>
            <div className='contenedorPuntaje'>
                <label className='puntaje O'>{puntaje.O}</label>
            </div>
        </div>
    )
}