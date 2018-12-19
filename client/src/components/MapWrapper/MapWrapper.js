import React from "react";
import "./MapWrapper.css";

const MapWrapper = props =>
  <div className= {props.zoom ? ("MapWrapperZoom") :("MapWrapperDef")}
       style= {props.zoom ? ({cursor: "zoom-out"}) : ({cursor: "zoom-in"})}
       onClick ={props.onClick}
       value = {props.zoom}
  >
    {props.children}
  </div>;

export default MapWrapper;