import React from "react"
import curvedArrow from "./assets/setinha.png"

export default function MenuContent({card, counter, setCounter}){
const [opened,setOpened] = React.useState(null)
const [fliped, setFliped] = React.useState(null)
const [completed, setCompleted] = React.useState([])
    
    function open(index){
        setOpened(index)
        setFliped(null)
    }
    function reveal(index){
        setFliped(index)
    }
    function complete(index, code){
        const auxComplete = [...completed, {pos:index, code:code}]
        setCompleted(auxComplete)
    }
    console.log(completed)
    return(
        <div className="Content">
            
            {card.map((value,index) =>
                {if(index !== opened){
                    
                  return  <DefaultCard index={index} open={open}/>
                    
                }else{
                    return <OpenedCard card ={card} index={index} reveal={reveal} fliped={fliped} complete={complete}/>
                }}
                
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

