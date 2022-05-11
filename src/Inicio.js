import React from 'react';

export default function Inicio(){
    const [display, setDisplay] = React.useState(true);
    return(
        display ? <div className="MenuInicial" >
                        <div>
                            <img src="/assets/logo.png" alt="Minha Figura"/>
                            <h1>ZapRecall</h1>
                            <button onClick={()=> setDisplay(false)}>Iniciar Recall!</button>
                        </div>
                    </div> : <></>    
    )
}