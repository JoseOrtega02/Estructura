import React from 'react'
import svg from "../img/menu-burger.svg"
import svg2 from "../img/cross.svg"

export  function Header() {
    let header = document.getElementById("header")
    let btn = document.getElementById("btn")
    
    function headerHandler(){
        let header = document.getElementById("header")
        let btn = document.getElementById("btn")
        
        if(header.style.left === "-95vw"){
            btn.src = svg2
            header.style.left = "0vw"
            
            return
        }else  {
            btn.src = svg
            header.style.left = "-95vw"
            
        }
        
    }

  return (
    <div>
        <ul className='header' id='header'>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#tema1">Conceptos Introductorios</a></li>
            <li><a href="#tema2">Partes de una computadora</a></li>
            <li><a href="#tema3">Bit,Byte y Palabra</a></li>
            <li><a href="#tema4">Señales digitales y analógicas</a></li>
            <li><a href="#autores">Autores</a></li>
        </ul>
        <span className='btn'  onClick={headerHandler}><img id="btn" src={svg} alt="" /></span>
    </div>
  )
}
