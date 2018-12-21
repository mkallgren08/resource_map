import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { Checkbox } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import { MapProper, MapLayer } from "../../components/Maps";
import { ResoList } from "../../components/ResoList";
import images from "../../assets/images/index.js"

const bckgrnd = images.backgrounds;
const icons = images.icons;
const colors=images.colors;

class MapPage extends Component {
  state = {
    zoomedIn: false,
    text: "Resources",
    width: 0,
    height: 0,
    collapsed: false,
    maps: [
      { name: "Oil", bckgrnd: bckgrnd.oil, icon: icons.oil, 
        color: colors.oil, layer: 1, show: true, checked: true },
      { name: "Black Titanium", bckgrnd: bckgrnd.blackTi, icon: icons.blackTi,
        color: "black",layer: 2, show: true, checked: true },
      { name: "Acid", bckgrnd: bckgrnd.acid, icon: icons.acid, 
        color: colors.acid,layer: 3, show: true, checked: true },
      { name: "Coal", bckgrnd: bckgrnd.coal, icon: icons.coal, 
        color: colors.coal,layer: 4, show: true, checked: true },
      { name: "Aluminium", bckgrnd: bckgrnd.alum, icon: icons.alum, 
        color: colors.alum,layer: 5, show: true, checked: true },
    ]
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { width: 0, height: 0 };
  //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  // }

  componentDidMount() {
    // this.updateWindowDimensions();
    // console.log(this.state.width, this.state.height)
    // window.addEventListener('resize', this.updateWindowDimensions);
    // console.log(bckgrnd, icons);
  }

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
      if (targetClass.indexOf('toggleRes') > -1){
        // this.collapseMenu(this.state.collapsed)
      }
      else if (targetClass.indexOf('noZoom') === -1) {
        let zoomedIn = this.state.zoomedIn;
        console.log(zoomedIn);
        if (zoomedIn) { zoomedIn = false; }
        else { zoomedIn = true; }
        this.setState({ zoomedIn: zoomedIn })
      }
    } else if (typeOfTarget === 'object'){
      // this.collapseMenu(this.state.collapsed);
    }
  }

  collapseMenu = (collapsed) => {
    let currentState = this.state.collapsed;
    let newState=true;
    if (currentState === true){
      newState=false;
    }
    console.log(this.state.collapsed)
    console.log(newState)
    console.log("Collapse function called")
    this.setState({collapsed:newState})
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
              <ResoList text={this.state.text} collapsed={this.state.collapsed} onClick={this.collapseMenu}>
                {maps.map(item =>
                  <Checkbox 
                    key={item.name} 
                    onChange={this.handleChange} 
                    type='checkbox'
                    checked={item.checked} 
                    name={item.name}
                    color={item.color}
                    icon={item.icon} 
                  />
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