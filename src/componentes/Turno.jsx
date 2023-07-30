import "../App.css";

export function Turno({ turno } ) {


    return (
        <div className='contenedorTurno'>
            <label className='textoTurno'>Turno actual: </label>
            <div className='turnoClip'> 
                <label id='lblTurno' className={`turno ${turno}`}>X O</label>
            </div> 
        </div>
    )
}