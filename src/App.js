import React from 'react';
import Inicio from './Inicio';
import Menu from './Menu';
import './css/reset.css';
import './css/style.css'


export default function App(){
    const [display, setDisplay] = React.useState(true);
    
    return(
        <div>
            {
                display ? <Inicio display = {display} setDisplay = {setDisplay}/> : <Menu />
            }
        </div>
  )
  }