import ReactDOM from 'react-dom';
import React from 'react';
import Inicio from './Inicio';
import Menu from './Menu';


function Content(){
    return(
        <div>
            <Inicio />
            <Menu />
        </div>
  )
  }

ReactDOM.render(<Content />, document.querySelector(".root"));