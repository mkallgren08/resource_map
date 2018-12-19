import React from "react";
import "./input-custom.css"

export const Checkbox = props =>
  <div className="form-group">
    <label htmlFor={props.name}>{props.name}</label>
    <input className="checkbox" {...props} />
  </div>;