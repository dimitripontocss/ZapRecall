import React from 'react';
import Inicio from './Inicio';
import Menu from './Menu';
import './css/reset.css';
import './css/style.css'


export default function App(){
    const [display, setDisplay] = React.useState(true);
    const [target,setTarget] = React.useState("")
    const [which,setWhich] = React.useState("")
    
    let card = [
        {
            question:"O que é JSX?",
            answer:"Uma extensão de linguagem do JavaScript"
        },
        {
            question:"O React é __",
            answer:"uma biblioteca JavaScript para construção de interfaces" 
        },
        {
            question:"Componentes devem iniciar com __ ",
            answer:"letra maiúscula"
        },
        {
            question:"Podemos colocar __ dentro do JSX",
            answer:"expressões"
        },
        {
            question:"O ReactDOM nos ajuda __",
            answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question:"Usamos o npm para __",
            answer:"gerenciar os pacotes necessários e suas dependências"
        },
        {
            question:"Usamos props para __ ",
            answer:"passar diferentes informações para componentes"
        },
        {
            question:"Usamos estado (state) para __",
            answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

    function selectCard(){
        setDisplay(false);
        if(which === "JavaScritp"){
            card = [
                {
                    question:"O que é JSX?",
                    answer:"Uma extensão de linguagem do JavaScript"
                },
                {
                    question:"O React é __",
                    answer:"uma biblioteca JavaScript para construção de interfaces" 
                },
                {
                    question:"Componentes devem iniciar com __ ",
                    answer:"letra maiúscula"
                },
                {
                    question:"Podemos colocar __ dentro do JSX",
                    answer:"expressões"
                },
                {
                    question:"O ReactDOM nos ajuda __",
                    answer:"interagindo com a DOM para colocar componentes React na mesma"
                },
                {
                    question:"Usamos o npm para __",
                    answer:"gerenciar os pacotes necessários e suas dependências"
                },
                {
                    question:"Usamos props para __ ",
                    answer:"passar diferentes informações para componentes"
                },
                {
                    question:"Usamos estado (state) para __",
                    answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
                }
            ]
        }
    }
 
    return(
        <div>
            {
                display ? <Inicio setDisplay = {setDisplay} target={target} setTarget={setTarget} which={which} setWhich={setWhich} selectCard={selectCard}/> : <Menu setDisplay={setDisplay} target={target} setTarget={setTarget} card={card} setWhich={setWhich}/>
            }
        </div>
  )
  }