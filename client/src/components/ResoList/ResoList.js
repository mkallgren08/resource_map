import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Checkbox } from "./../Form"

import "./ResoList.css";

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
              <h2 className="noZoom">{props.text}</h2>
              <div className="noZoom toggleWrapper">
                <button className="noZoom toggleBtn" onClick={props.toggleAll}>
                  {props.showAll ? (
                    <span className="noZoom" >Hide All</span>
                  ) : (
                      <span className="noZoom" >Show All</span>
                    )}
                </button>
              </div>
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