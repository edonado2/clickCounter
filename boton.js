import React from 'react';
import '../hojas-de-estilo/boton.css'

function Boton({texto, esBotonDeCliok, manejarClick}) {
    return(
      <button
      className={ esBotonDeCliok ? "boton-click" : "boton-reiniciar" }
      onClick={manejarClick}>
        {texto}
      </button>
    )
}

export default Boton;