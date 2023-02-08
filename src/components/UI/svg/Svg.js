import React from 'react';
import Sprite from '../../../Assets/svg/sprite.svg'

const SVG = (props) => {
    return (
        <span className="flex svg-container">
          {props.urlId &&  <svg className='svg'>  <use href={`${Sprite}${props.urlId}`}></use> </svg> }
            <span className='svg-text'> {props.value}</span>
        </span>
    );
}

export default SVG;