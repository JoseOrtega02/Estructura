import React from 'react'

import foto1 from "../img/medhime.svg"
import foto2 from "../img/medhime_ico.svg"
import foto3 from "../img/Ico_Des.svg"

export  function Banner() {
   
    

  return (
    <div className='containerBanner'>
        <div className="Banner__container" id="banner">
        <div  className='banner__div1'>
            <img src={foto1} alt="medhime completo" width="140" id="logoMed"/>
            <img src={foto2} alt="icono" width="50" id="icono"/>
        </div>
        <div  className='banner__div2'>
            <p id="texto" >Descargar <strong>OVA</strong></p>
            <a href="/link.html"><img src={foto3} alt="" width="40"/></a>
        </div>
    </div>
    </div>
  )
}
