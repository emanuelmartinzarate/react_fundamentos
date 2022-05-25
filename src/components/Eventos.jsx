import React, { useState } from 'react'

const Eventos = () => {
    
    const [texto, setTexto] = useState('Texto desde estado')
    
    const eventoClick = () => {
        console.log("me diste un click")
        setTexto('Nuevo texto')
    }
  return (
        <>
            <hr></hr>
            <h2>{ texto }</h2>
            <button onClick={ () => eventoClick() }>Click</button>
        </>
    
  )
}

export default Eventos