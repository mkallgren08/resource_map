import React from "react";
import "./input-custom.css"

export const Checkbox = props =>
  <div className="form-group checkbox-group noZoom">
    <label htmlFor={props.name} className="noZoom">{props.name}</label>
    <input className="checkbox noZoom" {...props} />
  </div>;