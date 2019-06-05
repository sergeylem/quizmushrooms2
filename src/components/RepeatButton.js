import React from 'react';
import classes from '../Buttons.module.css';

const repeatButton = (props) => {
  return  <div className={classes.column}>
  <img className={classes.OrderBtnRepeat}
    onClick={props.click}
    src= {props.img} 
    alt = '' />
   <p><font size="4"> {props.count1} : {props.count2} </font></p>
 </div>  
}

export default repeatButton;
