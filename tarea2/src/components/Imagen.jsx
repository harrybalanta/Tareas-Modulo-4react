import React from 'react'

const Imagen = (props) => {
  return (
    <div className='styles'>
        <img src={props.Ruta} alt="imagen" />
    </div>
  )
}

export default Imagen