import React from "react";
// import {ScrollView} from "react-native";
import "./Maps.css";

export const MapProper = props =>
    <div className={props.zoom ? ("MapBaseZoom MapProper") : ("MapBaseDef MapProper")} >
      {props.children}
    </div>
  ;