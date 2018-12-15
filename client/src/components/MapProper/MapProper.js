import React from "react";
// import {ScrollView} from "react-native";
import "./MapProper.css";

const MapProper = props =>
  <div className={props.zoom ? ("MapProperZoom") : ("MapProperDef")}  >
    {props.children}
  </div>

  // <div className="MapProperDef"  >
  //   {props.children}
  // </div>

  ;

export default MapProper;