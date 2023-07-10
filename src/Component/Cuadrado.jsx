
export const Cuadrado = ({ texto, seleccionado, actualizaTablero, index }) => {
  const className = `cuadrado ${seleccionado ? 'seleccionado' : ''}`
  
  const handleClick = () => {
    actualizaTablero(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {texto}
    </div>
  )
}