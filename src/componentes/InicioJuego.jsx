import '../App.css'
import { useState } from 'react'
import { JUGADORES } from '../modulos/constantes'
var placeholderIA = ''
export function InicioJuego({ inicializarValores }) {
    const [datosUsuario, setDatosUsuario] = useState(JUGADORES)

    const handleChange = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (datosUsuario.jugador2 === '') return alert('Elija un adversrio')
        if (datosUsuario.ficha === '') return alert('Elija una ficha')
        inicializarValores(datosUsuario)
    }

    return (
        <div id='modal' className='modal visible'>
            <form className='form' onSubmit={handleSubmit}>
                <fieldset className='optionF'>
                    <legend className='lbl'> Adversario: </legend>
                    <div className='divs'>
                        <input
                            className='option'
                            type='radio'
                            id='jugador2'
                            name='jugador2'
                            value='humano'
                            onChange={handleChange}
                        />
                        <label className='lbl'> Otro jugador </label>
                    </div>
                    <div className='divs'>
                        <input
                            className='option'
                            type='radio'
                            id='ia'
                            name='jugador2'
                            value='IAfacil'
                            onChange={handleChange}
                        />
                        <label className='lbl'> IA fácil </label>
                    </div>
                    <div className='divs'>
                        <input
                            className='option'
                            type='radio'
                            id='ia'
                            name='jugador2'
                            value='IAdificil'
                            onChange={handleChange}
                        />
                        <label className='lbl'> IA difícil </label>
                    </div>
                </fieldset>
                <fieldset className='optionF A'>
                    <legend className='lbl'> Ficha: </legend>
                    <div className='divs'>
                        <input
                            type='radio'
                            id='ficha'
                            name='ficha'
                            value='X'
                            onChange={handleChange}
                        />
                        <label className='lbl Ficha X'> X </label>
                    </div>
                    <div className='divs'>
                        <input
                            type='radio'
                            id='ficha'
                            name='ficha'
                            value='O'
                            onChange={handleChange}
                        />
                        <label className='lbl Ficha O'> O </label>
                    </div>
                </fieldset>
                <button className='boton' type='submit'>
                    {' '}
                    Guardar{' '}
                </button>
            </form>
        </div>
    )
}
