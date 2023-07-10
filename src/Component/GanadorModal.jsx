

export function GanadorModal({ ganador, reiniciarJuego }) {

    if (ganador === null) return null

    return (
        <section className='ganador'>
            <div className='text'>
                <h2>{ganador}!!!</h2>
                <footer>
                    <button onClick={reiniciarJuego}>Reiniciar</button>
                </footer>
            </div>
        </section>
    )
}