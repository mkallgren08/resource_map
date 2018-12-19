import React from "react";
import "./ResoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ResoList = props =>
  <div className="ResoList noZoom" >
    
    <div className="noZoom resource-header">
      <h2 className="noZoom">{props.text}
        <div className= "noZoom overlay"></div> 
        <button className="noZoom highIndex" onClick={props.onClick} >
          <FontAwesomeIcon 
            className= "noZoom faIcon" 
            icon="angle-double-left"
            
          />
        </button>
      </h2>
    </div>
    
    {props.children}
  </div>;