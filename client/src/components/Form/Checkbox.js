import React from "react";
import "./input-custom.css"

export const Checkbox = props =>
  <div className="form-group checkbox-group noZoom">
    <span className="noZoom labelWrap">
      <label htmlFor={props.name} className="noZoom resLabel"
        style={{ color: props.color }}>{props.name}</label>
      <img className="noZoom iconDisp" src={props.icon}
        alt={"Icon for " + props.name} ></img>
    </span>

    <input className="checkbox noZoom" {...props} />
  </div>;