
export const Cuadrado = ({ hijo, seleccionado, actualizaTablero, index }) => {
  const className = `cuadrado ${seleccionado ? 'seleccionado' : ''}`

  const handleClick = () => {
    actualizaTablero(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {hijo}
    </div>
  )
}