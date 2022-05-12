import React from "react";

export default function Footer({card, counter}){
    console.log(counter)
    return(
        <footer>
                <p>{counter}/{card.length} CONCLUÍDOS</p>
            </footer>
    )
}