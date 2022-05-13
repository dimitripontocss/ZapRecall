import React from "react"
import curvedArrow from "./assets/setinha.png"

export default function MenuContent({card, counter, setCounter,completed,setCompleted,correct,setCorrect}){
const [opened,setOpened] = React.useState(null)
const [fliped, setFliped] = React.useState(null)
    
    function open(index){
        setOpened(index)
        setFliped(null)
    }
    function reveal(index){
        setFliped(index)
    }
    function complete(index, code){
        const auxComplete = [...completed, {pos:index, code:code}]
        setCompleted(auxComplete);
        setCounter(counter + 1);
        if(code === "zap" || code === "quase"){
            setCorrect(correct + 1);
        }
    }
    return(
        <div className="Content">
            
            {card.map((value,index) =>
                {   
                    for(let i=0;i<completed.length;i++){
                        if(completed.length !== 0){
                            if(index === completed[i].pos){
                                return <ResultCard completed={completed[i]} index={index}/>
                            }
                        }
                    }   
                    if(index !== opened){
                        return  <DefaultCard index={index} open={open}/>    
                    }else{
                        return <OpenedCard card ={card} index={index} reveal={reveal} fliped={fliped} complete={complete}/>
                    }
                
                }
             )
            }
            </div>
    )
}

function DefaultCard({index, open}){
    return(
        <div key={index} className="card">
                <h4>Pergunta {index+1}</h4>
                <ion-icon onClick={()=>open(index)} name="play-outline"></ion-icon>
             </div> 
    )
}

function OpenedCard({card, index, reveal, fliped ,complete}){
    return(
        fliped !== index ?
        <div key={index} className="open-card">
            <h4>{card[index].question}</h4>
            <img onClick={()=>reveal(index)} src={curvedArrow} alt="Minha Figura"></img>
        </div> 
        : 
        <div key={index} className="revealed-card">
            <div><h4>{card[index].answer}</h4></div>
            <div className="box">
                <div onClick={()=>complete(index, "erro")} className="erro">Não lembrei</div>
                <div onClick={()=>complete(index, "quase")} className="quase">Quase não lembrei</div>
                <div onClick={()=>complete(index, "zap")} className="zap">Zap!</div>
            </div>
            
        </div>

    )
}

function ResultCard({completed,index}){
    return(
        <>
            {completed.code === "zap" ? <Zap index={index}/> : completed.code === "quase" ? <Quase index={index}/> : <Erro index={index}/>}
        </>       
    )
}

function Zap({index}){
    return(
        <div key={index} className="card correct">
                <h4>Pergunta {index+1}</h4>
                <ion-icon name="checkmark-circle"></ion-icon>
        </div> 
    )
}

function Quase({index}){
    return(
        <div key={index} className="card almost">
                <h4>Pergunta {index+1}</h4>
                <ion-icon name="help-circle"></ion-icon>
        </div> 
    )
}

function Erro({index}){
    return(
        <div key={index} className="card error">
                <h4>Pergunta {index+1}</h4>
                <ion-icon name="close-circle"></ion-icon>
        </div> 
    )
}

