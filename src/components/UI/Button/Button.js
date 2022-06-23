import React from 'react';
import Classes from './button.module.css'


const Buttons = (props) => {
    return (
        <button className={`${Classes.btn} ${props.className}`}  onClick={props.onClick? props.onClick: null} >
             <span >{props.children}</span>
        </button>
    );

} 
export default Buttons