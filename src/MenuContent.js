import React from "react"

export default function MenuContent({card, counter, setCounter}){
const [opened,setOpened] = React.useState(null)
const [fliped, setFliped] = React.useState(null)
    function open(index){
        setCounter(counter +1)
        setOpened(index)
    }
    function reveal(index){
        setFliped(index)
    }

    return(
        <div className="Content">
            
            {card.map((value,index) =>
                index !== opened ? <DefaultCard index={index} open={open}/> 
             : <OpenedCard card ={card} index={index} reveal={reveal} fliped={fliped}/>
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

function OpenedCard({card, index, reveal, fliped}){
    return(
        fliped !== index ?
        <div key={index} className="open-card">
            <h4>{card[index].question}</h4>
            <img onClick={()=>reveal(index)} src="/assets/setinha.png" alt="Minha Figura"></img>
        </div> 
        : 
        <div key={index} className="revealed-card">
            <h4>{card[index].answer}</h4>
            <ion-icon onClick={()=>reveal(index)} name="play-outline"></ion-icon>
        </div>

    )
}

