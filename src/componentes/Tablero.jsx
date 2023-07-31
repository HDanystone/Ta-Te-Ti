import '../App.css'
export function Tablero({ tablero, actualizaJuego }) {
    return (
        <div className='tablero'>
            {tablero?.map((celda, index) => (
                <div className='celda' id={index} key={index} onClick={() => actualizaJuego(index)}>
                    {' '}
                    {celda}
                </div>
            ))}
        </div>
    )
}
