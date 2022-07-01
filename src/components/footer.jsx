import React from 'react'

import foto1 from "../img/logo-white-344x67.png"
import foto2 from "../img/LL.png"

export  function Footer() {
  return (
    <footer className='footer'>
		<div>
		<a href="http://www.portalhuarpe.com.ar" target="_blank">
			<img src={foto1} alt="logo Huarpe"/>	
		</a>
		</div>
		<div className='footer__div1' >
			<p>Un Vistazo a la Computadora por José Ortega, Eliana Agüero;  desarrollado con MeDHIME (Américo Sirvente) . Diseñado en el Centro Tecnológico Educativo U.N.S.J.
Autor metadato: José Ortega, Eliana Agüero se distribuye bajo la Licencia Creative Commons Atribución-NoComercial-Compartirigual 4.0 Internacional.</p>
		<img src={foto2} alt="copyright" />
		</div>
		
	</footer>
  )
}
