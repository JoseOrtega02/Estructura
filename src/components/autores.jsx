import React from 'react'

import foto1 from "../img/foto1.jpg"
import foto2 from "../img/foto2.jpg"

export  function Autores() {
  return (
    <div className='aut__container' id='autores'>
        <div className='aut__card'>
            <h1>Autor: Eliana Agüero</h1>
            <img src={foto1} alt="" />
        </div>
        <div className='aut__card'>
            <h1>Autor: José Ortega</h1>
            <img src={foto2} alt="" />
        </div>
    </div>
  )
}
