import "../App.css";
import { useState } from "react";
import { JUGADORES } from "../modulos/constantes";
var placeholder = ''
export function InicioJuego({ inicializarValores }) {

    const [datosUsuario, setDatosUsuario] = useState(JUGADORES)
    const handleChange = (e) => {

        setDatosUsuario({
            ...datosUsuario,
            [e.target.id]: e.target.value
        })
        if (e.target.id === 'ia') placeholder= e.target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (datosUsuario.ficha === '') return alert('Elija una ficha')
        if (datosUsuario.jugador1 === '') return alert('Elija nombre')
        if (datosUsuario.ia === '' && datosUsuario.jugador2 === '') return alert('Elija nombre')
        inicializarValores(datosUsuario)
    }

    const player2Humano = document.getElementById('jugador2')
    if (player2Humano) var esIA = !player2Humano.checked

    return (
        <form className='form' onSubmit={handleSubmit}>
            <fieldset className='optionF'>
                <legend className="lbl"> Adversario: </legend>
                <div className="divs">
                    <input className='option' type="radio" id="jugador2" name="jugador2" value="humano" onChange={handleChange} />
                    <label className="lbl"> Otro jugador  </label>
                </div>
                <div className="divs">
                    <input className='option' type="radio" id="ia" name="jugador2" value="IAfacil" onChange={handleChange} />
                    <label className="lbl"> IA fácil  </label>
                </div>
                <div className="divs">
                    <input className='option' type="radio" id="ia" name="jugador2" value="IAdificil" onChange={handleChange} />
                    <label className="lbl"> IA difícil  </label>
                </div>
            </fieldset>
            <fieldset className='optionF A'>
                <legend className="lbl" > Ficha: </legend>
                <div className="divs">

                    <input type="radio" id="ficha" name="ficha" value="X" onChange={handleChange} />
                    <label className='lbl Ficha X'> X  </label>
                </div>
                <div className="divs">
                    <input type="radio" id="ficha" name="ficha" value="O" onChange={handleChange} />
                    <label className='lbl Ficha O'> O  </label>
                </div>
            </fieldset>
            <div className="contieneNombres">
                <div className="nombres">

                    <input className='inputNombre' type="text" id="jugador1" name="jugador1" placeholder="Nombre jugador 1" onChange={handleChange} />
                </div>
                <div className="nombres">
                    <input className='inputNombre' disabled={esIA} type="text" id="jugador" name="jugador2" placeholder={esIA ? placeholder: 'Nombre jugador 2'} onChange={handleChange} />
                </div>
            </div>
            <button className='boton' type='submit'>  Guardar  </button>
        </form>
    )

}