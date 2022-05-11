import React from 'react';

export default function Inicio(){
    const [display, setDisplay] = React.useState("MenuInicial");
    function start(){
        setDisplay("MenuInicial escondido");
    }
    return(
        <div className={display} >
            <div>
                <img src="/assets/logo.png" alt="Minha Figura"/>
                <h1>ZapRecall</h1>
                <button onClick={start}>Iniciar Recall!</button>
            </div>
        </div>
    )
}