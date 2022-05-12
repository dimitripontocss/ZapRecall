import ReactDOM from 'react-dom';
import React from 'react';
import Inicio from './Inicio';
import Menu from './Menu';


function Content(){
    const [display, setDisplay] = React.useState(true);
    
    return(
        <div>
            {
                display ? <Inicio display = {display} setDisplay = {setDisplay}/> : <Menu />
            }
        </div>
  )
  }

ReactDOM.render(<Content />, document.querySelector(".root"));