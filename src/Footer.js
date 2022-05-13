import React from "react";
import parabuains from "./assets/party.png"
import errou from "./assets/sad.png"

export default function Footer({card, counter, completed, correct}){
    console.log(correct)
    return(
        <>
            {
                <DefaultFooter card={card} counter={counter} completed={completed}  correct={correct}/>           
            }
        </>
    )
}

function DefaultFooter({card,counter,completed, correct}){
    return(
        <footer>
            <Ending counter={counter} card={card} correct={correct}/>
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

function Ending ({counter,card,correct}){
    if(counter === card.length){
        if(correct === counter){
            return(
                <div className="finaltxt">
                    <div> <img src={parabuains}/> Parabéns! </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>
            )
        }else{
           return(
            <div className="finaltxt">
                <div><img src={errou}/> <span>Putz...</span></div>
                <p>Ainda faltam alguns..Mas não desanime!</p>
            </div>
            )
        }
    }else return(<></>)
}