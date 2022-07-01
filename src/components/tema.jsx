import React from 'react'



export  function Tema(props) {
  return (
    <div className='tema__container' id={props.id}>
        <h1>{props.title}</h1>

        <p>{props.indrod}</p>
        <p>{props.indrod1}</p>
        <p>{props.indrod2}</p>
        <p>{props.indrod3}</p>
        <p>{props.indrod4}</p>
        <p>{props.indrod5}</p>
        <p>{props.indrod6}</p>
        <p>{props.indrod7}</p>
        <video src={props.video} controls></video>
        <img src={props.img} alt="" />
        <p>{props.desc}</p>
        <p>{props.desc1}</p>
        <p>{props.desc2}</p>
        <p>{props.desc3}</p>
        <a href={props.actv} target="_blank"><button className='tema__btn'>Actividad</button></a>
    </div>
  )
}
