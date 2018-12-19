import React from "react";
// import {ScrollView} from "react-native";
import "./Maps.css";

export const MapLayer = props =>
    <div className={props.zoom ? ("MapBaseZoom MapLayer") : ("MapBaseDef MapLayer")} style={{ zIndex: props.map.layer,backgroundImage:`url(${props.map.bckgrnd})`}} >
      {props.children}
    </div>
  ;