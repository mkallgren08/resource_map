import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { Checkbox } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import { MapProper, MapLayer } from "../../components/Maps";
import { ResoList } from "../../components/ResoList";
import oil from "./../../assets/images/resmap-oil.png";
import blackTi from "../../assets/images/resmap-blackTi.png";
import acid from "../../assets/images/resmap-acid.png";

class MapPage extends Component {
  state = {
    zoomedIn: true,
    text: "Resources",
    width: 0,
    height: 0,
    collapsed: false,
    maps: [
      { name: "Oil", bckgrnd: oil, layer: 1, show: true, checked: true },
      { name: "Black Titanium", bckgrnd: blackTi, layer: 2, show: true, checked: true },
      { name: "Acid", bckgrnd: acid, layer: 3, show: true, checked: true }
    ]
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { width: 0, height: 0 };
  //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  // }

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   console.log(this.state.width, this.state.height)
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  //   console.log(this.state.width, this.state.height)
  // }

  handleChange = event => {
    // console.log(this.state.maps)
    const { checked, name } = event.target;
    // console.log(checked);
    let index = 0;
    let mappings = this.state.maps
    for (let i = 0; i < mappings.length; i++) {
      if (mappings[i].name === name) {
        index = i;
      }
    }
    console.log(index);
    // let show = this.state.maps[index].show
    let newStateBase = this.state;
    console.log(newStateBase.maps[index])
    newStateBase.maps[index].checked = checked;
    newStateBase.maps[index].show = checked;
    console.log(newStateBase.maps[index])
    this.setState({ state: newStateBase })
  }

  zoomIn = (event) => {
    console.log(event.target.className)
    let targetClass = event.target.className;
    console.log(typeof targetClass)
    let typeOfTarget = typeof targetClass;
    console.log(typeOfTarget)
    if (typeOfTarget === 'string') {
      if (targetClass.indexOf('collapse') > -1){
        this.collapseMenu(this.state.collapsed)
      }
      else if (targetClass.indexOf('noZoom') === -1) {
        let zoomedIn = this.state.zoomedIn;
        console.log(zoomedIn);
        if (zoomedIn) { zoomedIn = false; }
        else { zoomedIn = true; }
        this.setState({ zoomedIn: zoomedIn })
      }
    } else if (typeOfTarget === 'object'){
      this.collapseMenu(this.state.collapsed);
    }
  }

  collapseMenu = (collapsed) => {
    console.log(collapsed)
    console.log("Collapse function called")
  }

  render() {
    const maps = this.state.maps;

    return (
      <Container fluid>
        <Row>
          <div >
            <MapWrapper zoom={this.state.zoomedIn} onClick={this.zoomIn}>
              <MapProper zoom={this.state.zoomedIn} >

              </MapProper>
              {maps.map(item =>
                item.show ? <MapLayer key={item.name} zoom={this.state.zoomedIn} map={item} ></MapLayer> : <div key={item.name}></div>
              )}
              <ResoList text={this.state.text} onClick={this.collpaseMenu} collpased={this.state.collapsed}>
                {maps.map(item =>
                  <Checkbox key={item.name} onChange={this.handleChange} type='checkbox' checked={item.checked} name={item.name} />
                )}
              </ResoList>
            </MapWrapper>
          </div>

        </Row>
      </Container>
    );
  }
}

export default MapPage;