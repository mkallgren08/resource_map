import React from "react";
import "./MapWrapper.css";

const MapWrapper = props =>
  <div className= {props.zoom ? ("MapWrapperZoom") :("MapWrapperDef")}>
    {props.children}
  </div>;

export default MapWrapper;