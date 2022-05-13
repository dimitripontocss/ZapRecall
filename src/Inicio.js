import React from 'react';
import logo from './assets/logo.png'

export default function Inicio({setDisplay,target,setTarget,which,setWhich,selectCard}){
    const bStyle = {
        color: '#C0C0C0',
        background: '#E8E8E8'
      };
      console.log(typeof which)
    return(
        <div className="MenuInicial" >
                <div>
                     <img src={logo} alt="Minha Figura"/>
                     <h1>ZapRecall</h1>
                     <input type="option" list="cards" 
                     value={which} 
                     onChange={(x) => setWhich(x.which.value)}/>
                        <datalist id="cards">
                        <option>JavaScript</option>
                        <option>Wilian</option>
                        </datalist>
                     <input
                        type="text" 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        placeholder="Digite sua meta de zaps.."
                    />
                    {target === "" ? <button style={bStyle}>Iniciar Recall!</button>
                    :<button onClick={()=> setDisplay(false)}>Iniciar Recall!</button>
                    }
                </div>
        </div>    
    )
}