import React from "react";
// import {ScrollView} from "react-native";
import "./Maps.css";
import oil from "./../../assets/images/resmap-oil.png";

const imagebase = "../../assets/images/resmap-";
//const imagebase = "/static/media/resmap-";

export const MapLayer = props =>
    <div className={props.zoom ? ("MapBaseZoom MapLayer") : ("MapBaseDef MapLayer")} style={{ zIndex: props.map.layer,backgroundImage:`url(${props.map.bckgrnd})`}} >
      {props.children}
    </div>
  ;