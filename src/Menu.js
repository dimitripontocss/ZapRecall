import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import React from "react"


export default function Menu(){
    const card = [
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
            answer:"8. dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]
    const [counter,setCounter] = React.useState(0);
    return(
        <main>
            <Header />
            <Content card ={card} counter={counter} setCounter={setCounter}/>
            <Footer card={card} counter={counter}/>
        </main>
        
    )
}


