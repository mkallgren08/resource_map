import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { Checkbox } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import { MapProper, MapLayer } from "../../components/Maps";
import { ResoList } from "../../components/ResoList";
// import images from "../../assets/images/index.js"
import images from "../../assets/images/testIndex.js"

class MapPage extends Component {

  state = {
    zoomedIn: false,
    text: "Resources",
    filterterm: "",
    width: 0,
    height: 0,
    collapsed: false,
    showAll: true,
    maps: []
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.loadMaps()
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }

  loadMaps () {
    // console.log(images2)
    let maps = [], counter = 1;
    let MapBase = function (item) {
      this.name=item.name,
      this.bckgrnd= item.bckgrnd,
      this.icon= item.icon,
      this.color= item.color
      this.show =true,
      this.checked =true
    };
    images.forEach(function(val){
      let base = new MapBase(val)
      base.layer = counter;
      if ( base.name !== 'Black Titanium' && base.name !== 'Fertilizer' && base.name !== 'Oil') {
            base.shadowed = true; 
      } else {
        base.shadowed = false
      }
      counter++; maps.push(base)

    });
    // console.log(oldMaps)
    // console.log(maps)
    // console.log(maps[0].name)
    this.setState({maps: maps})
  }



  handleChange = event => {
    // console.log(this.state.maps)
    const { checked, name } = event.target;
    // console.log(checked);
    let index = 0, mappings = this.state.maps
    for (let i = 0; i < mappings.length; i++) {
      if (mappings[i].name === name) {
        index = i;
      }
    }
    let newStateBase = this.state;
    // console.log(newStateBase.maps[index])
    newStateBase.maps[index].checked = checked;
    newStateBase.maps[index].show = checked;
    // console.log(newStateBase.maps[index])
    this.setState({ state: newStateBase })
  }

  zoomIn = (event) => {
    // console.log(event.target.className)
    let targetClass = event.target.className;
    // console.log(typeof targetClass)
    let typeOfTarget = typeof targetClass;
    // console.log(typeOfTarget)
    if (typeOfTarget === 'string') {
      if (targetClass.indexOf('toggleRes') > -1) {
        // this.collapseMenu(this.state.collapsed)
      }
      else if (targetClass.indexOf('noZoom') === -1) {
        let zoomedIn = this.state.zoomedIn;
        console.log(zoomedIn);
        if (zoomedIn) { zoomedIn = false; }
        else { zoomedIn = true; }
        this.setState({ zoomedIn: zoomedIn })
      }
    } else if (typeOfTarget === 'object') {
      // this.collapseMenu(this.state.collapsed);
    }
  }

  collapseMenu = () => {
    let currentState = this.state.collapsed, newState = true;
    if (currentState === true) { newState = false; } // Toggles between collapsed and expanded 
    console.log(this.state.collapsed, newState, "Collapse function called")
    this.setState({ collapsed: newState })
  }

  toggleAll = () => { //Hides or shows all available resources
    // console.log("toggle all function called!")
    let oldState = this.state.showAll, newState = true;
    if (oldState === false) {
      newState = true;
      // console.log(newState)
    } else if (oldState === true) {
      newState = false
      // console.log(newState)
    }
    let modMaps = this.state.maps;

    modMaps.forEach(item => {
      item.show = newState;
      item.checked = newState;
    })
    // console.log(modMaps)
    this.setState({ maps: modMaps, showAll: newState })
  }

  // handle form input
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    let modMaps = this.state.maps;
    // console.log(value)
    modMaps.forEach(item => {
      if(item.name.toLowerCase().indexOf(value.toLowerCase()) > -1){
        item.show = true; item.checked = true;
      } else {
        item.show = false; item.checked = false;
      }
    })
    // console.log(modMaps);
    this.setState({ maps: modMaps, [name]: value });
  };

  render() {
    const maps = this.state.maps;
    // console.log(this.state.filterterm)

    return (
      <Container fluid>
        <Row>
          <div >
            <MapWrapper zoom={this.state.zoomedIn} onClick={this.zoomIn}>
              <MapProper zoom={this.state.zoomedIn} >

              </MapProper>
              {maps.map(item =>
                item.show ? (
                  <MapLayer key={item.name} zoom={this.state.zoomedIn} map={item} ></MapLayer>
                ) : null
              )}
              <ResoList
                text={this.state.text}
                filter={this.state.filterterm}
                collapsed={this.state.collapsed}
                onClick={this.collapseMenu}
                handleInputChange={this.handleInputChange}
                toggleAll={this.toggleAll}
                showAll={this.state.showAll}
              >
                {maps.map(item =>
                  <Checkbox
                    key={item.name}
                    onChange={this.handleChange}
                    type='checkbox'
                    checked={item.checked}
                    name={item.name}
                    color={item.color}
                    icon={item.icon}
                    data-shadowed={item.shadowed}
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