import React from "react";
import "./ResoList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ResoList = props =>

  <div className="ResoList noZoom" >
    {props.collapsed ? (
      <div className="noZoom">
        <div className="noZoom toggleResList collapsedResList" onClick={props.onClick}>
          <FontAwesomeIcon
            onClick={props.onClick}
            className="noZoom faIconSide"
            icon="angle-double-right"
          />
          <FontAwesomeIcon
            onClick={props.onClick}
            className="noZoom faIconSide"
            icon="angle-double-right"
          />
          <FontAwesomeIcon
            onClick={props.onClick}
            className="noZoom faIconSide"
            icon="angle-double-right"
          />
          <FontAwesomeIcon
            onClick={props.onClick}
            className="noZoom faIconSide"
            icon="angle-double-right"
          />
          <FontAwesomeIcon
            onClick={props.onClick}
            className="noZoom faIconSide"
            icon="angle-double-right"
          />
        </div>
      </div>

    ) : (
        <div className="noZoom">
          <div className="noZoom resource-wrapper">
            <div className="noZoom resource-header">
              <h2 className="noZoom">{props.text}
                {/* <button className="noZoom collapseBtn" onClick={props.onClick} >
          <FontAwesomeIcon 
            className= "noZoom faIcon" 
            icon="angle-double-left"
          />
        </button> */}
              </h2>

            </div>
            <div className="noZoom resource-body">
              {props.children}
            </div>
          </div>
          <div className="noZoom toggleResList expandedResList" onClick={props.onClick}>

            <FontAwesomeIcon
              onClick={props.onClick}
              className="noZoom faIconSide"
              icon="angle-double-left"
            />
            <FontAwesomeIcon
              onClick={props.onClick}
              className="noZoom faIconSide"
              icon="angle-double-left"
            />
            <FontAwesomeIcon
              onClick={props.onClick}
              className="noZoom faIconSide"
              icon="angle-double-left"
            />
            <FontAwesomeIcon
              onClick={props.onClick}
              className="noZoom faIconSide"
              icon="angle-double-left"
            />
            <FontAwesomeIcon
              onClick={props.onClick}
              className="noZoom faIconSide"
              icon="angle-double-left"
            />
          </div>
        </div>
      )}


  </div>;