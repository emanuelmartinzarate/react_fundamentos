import React, { useState } from 'react'

const Listas = () => {
    const estadoInicial = [
        {id: 1, texto: 'tarea1'},
        {id: 2, texto: 'tarea2'},
        {id: 3, texto: 'tarea3'}
    ]
    const [lista, setLista] = useState(estadoInicial)

    const agregarElemento = () => {
        console.log('click');
        setLista([
            ...lista,
            {id:4, texto: 'tarea4'}
        ])
    }

  return (
    <div>
        <h2>Listas</h2>
        {
            lista.map((item) =>(
                <h4 key={item.id} >{item.texto}</h4>
            ))
        }
        <button onClick={()=> agregarElemento()}>Agregar</button>
    </div>
  )
}

export default Listas