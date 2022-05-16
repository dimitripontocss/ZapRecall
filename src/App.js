import React from 'react';
import Inicio from './Inicio';
import Menu from './Menu';
import './css/reset.css';
import './css/style.css'


export default function App(){
    const [display, setDisplay] = React.useState(true);
    const [target,setTarget] = React.useState("");
    const [which,setWhich] = React.useState({value: "JavaScript"});
    
    let card = [];

    const Deck1 = [
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
    const Deck2 = [
        {
            question:"Qual meu nome?",
            answer:"Dimitri"
        },
        {
            question:"Sou natural de __",
            answer:"Juiz de Fora city" 
        },
        {
            question:"Quem gosta de css é__ ",
            answer:"dodoi"
        },
        {
            question:"React é__",
            answer:"bala"
        },
        {
            question:"Sem FNX__",
            answer:"sem Major"
        }
    ];

    const Deck1RND = Deck1.sort(() => {
        return (Math.random() - 0.5);
    })

    const Deck2RND = Deck2.sort(() => {
        return (Math.random() - 0.5);
    })

    if(!display){
        selectCard();
    }

    function selectCard(){
        if(which.value === "JavaScript"){
            console.log("confirmou")
            card = Deck1RND;

        }else if(which.value === "Random"){
            card = Deck2RND;
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