import React from 'react';
import logo from './assets/logo.png'

export default function Inicio({display, setDisplay}){
    
    return(
        <div className="MenuInicial" >
                <div>
                     <img src={logo} alt="Minha Figura"/>
                     <h1>ZapRecall</h1>
                     <button onClick={()=> setDisplay(false)}>Iniciar Recall!</button>
                </div>
        </div>    
    )
}