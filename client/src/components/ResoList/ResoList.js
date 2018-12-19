import React from "react";
import "./ResoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ResoList = props =>
  <div className="ResoList noZoom" >
    <div className="noZoom resource-header">
      <h2 className="noZoom">{props.text} 
        <button className="noZoom" onClick={props.onClick} >
          <FontAwesomeIcon 
            className= "noZoom faIcon" 
            icon="angle-double-left"
            
          />
        </button>
      </h2>
    </div>
    
    {props.children}
  </div>;