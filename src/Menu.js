import Header from "./Header"
import MenuContent from "./MenuContent"
import Footer from "./Footer"
import React from "react"


export default function Menu({setDisplay,target,setTarget,card,setWhich,setCard}){
    

    const [counter,setCounter] = React.useState(0);
    const [completed, setCompleted] = React.useState([])
    const [correct,setCorrect] = React.useState(0);
    const [opened,setOpened] = React.useState(null)
    const [fliped, setFliped] = React.useState(null)

    function reset(){
        setDisplay(true);
        setCounter(0);
        setCompleted([]);
        setCorrect(0);
        setOpened(null);
        setFliped(null);
        setTarget("");
        setWhich({value:"JavaScript"});
    }

    return(
        <main>
            <Header />
            <MenuContent card ={card} counter={counter} setCounter={setCounter} completed={completed} setCompleted={setCompleted} correct={correct} setCorrect={setCorrect} opened={opened} setOpened={setOpened} fliped={fliped} setFliped={setFliped}/>
            <Footer card={card} counter={counter} completed={completed} correct={correct} reset={reset} target={target}/>
        </main>
        
    )
}


