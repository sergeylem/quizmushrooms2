import React from 'react';
import classes from '../Buttons.module.css';

const imageButton = (props) => {
  return <div className={classes.column}> 
    <img className={props.classButton}
        onClick={ props.click }
        src = {props.img} 
        alt = ''/>
        <p>{props.name}</p>
  </div>

}

export default imageButton;
