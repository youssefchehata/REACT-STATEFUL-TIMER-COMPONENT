import React from 'react';
import "./Time.css";

const convert = el => { //  props au Time mettez le dans variable ms
  var  hour, minute, seconds;
  seconds = Math.floor(el / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;

  return (String(hour).padStart(2, '0') +
  ':' + String(minute).padStart(2, '0') +
  ':' + String(seconds).padStart(2, '0'))
}
     



      const DynamicTimer = ({ms}) =>{

return (
        <div className="container">
        <div className="hours">{convert(ms)}  
        </div>
        
      <div className="s">
      <span className="sec2 ">Hour</span>
      <span className="sec2">Minute</span>
      <span className="sec2">Second</span>
      </div>
      
</div> )

     }
    
  

export default DynamicTimer;