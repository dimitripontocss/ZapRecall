import React from 'react';

export default function Inicio({display, setDisplay}){
    
    return(
        <div className="MenuInicial" >
                <div>
                     <img src="/assets/logo.png" alt="Minha Figura"/>
                     <h1>ZapRecall</h1>
                     <button onClick={()=> setDisplay(false)}>Iniciar Recall!</button>
                </div>
        </div>    
    )
}