import React from "react";
import parabuains from "./assets/party.png"
import errou from "./assets/sad.png"

export default function Footer({card, counter, completed, correct, reset, target}){
    return(
        <>
            {
                <DefaultFooter card={card} counter={counter} completed={completed}  correct={correct} reset={reset} target={target}/>           
            }
        </>
    )
}

function DefaultFooter({card,counter,completed,correct,reset,target}){
    return(
        <footer>
            <Ending counter={counter} card={card} correct={correct} reset={reset} target={target}/>
            <div><p>{counter}/{card.length} CONCLUÍDOS</p></div>
            <div className="icons">{completed.map((value)=>icons(value))}</div>
        </footer>
    )
}

function icons(completed){

    if(completed.code === "zap"){
        return (<div className="FZap"><ion-icon className={"FZap"} name="checkmark-circle"></ion-icon></div>)
    }
    else if(completed.code === "quase"){
        return (<div className="FQuase"><ion-icon className={"FQuase"} name="help-circle"></ion-icon></div>)
        }
        else{
            return (<div className="FError"><ion-icon className={"FError"} name="close-circle"></ion-icon></div>)                 
        }
}

function Ending ({counter,card,correct,reset,target}){
    target = Number(target);
    if(counter === card.length){
        if(correct >= target){
            return(
                <div className="finaltxt">
                    <button onClick={reset}>Reiniciar Recall</button>
                    <div> <img src={parabuains} alt="Parabens"/> Parabéns! </div>
                    <p>Você atingiu sua meta! É sobre isso!</p>
                </div>
            )
        }else{
           return(
            <div className="finaltxt">
                <button onClick={reset}>Reiniciar Recall</button>
                <div><img src={errou} alt="errou"/> <span>Putz...</span></div>
                <p>Ainda faltam alguns...Mas não desanime!</p>
            </div>
            )
        }
    }else return(<></>)
}