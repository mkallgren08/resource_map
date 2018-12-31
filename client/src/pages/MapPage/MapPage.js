import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { Checkbox } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import { MapProper, MapLayer } from "../../components/Maps";
import { ResoList } from "../../components/ResoList";
import images from "../../assets/images/index.js"

const bckgrnd = images.backgrounds;
const icons = images.icons;
const colors = images.colors;

class MapPage extends Component {
  state = {
    zoomedIn: false,
    text: "Resources",
    filterterm: "",
    width: 0,
    height: 0,
    collapsed: false,
    showAll: true,
    maps: [
      {
        name: "Acid", bckgrnd: bckgrnd.acid, icon: icons.acid,
        color: colors.acid, layer: 3, show: true, checked: true, shadowed: true
      },
      {
        name: "Aluminium", bckgrnd: bckgrnd.alum, icon: icons.alum,
        color: colors.alum, layer: 5, show: true, checked: true, shadowed: true
      },
      {
        name: "Black Titanium", bckgrnd: bckgrnd.blackTi, icon: icons.blackTi,
        color: "black", layer: 2, show: true, checked: true, shadowed: false
      },
      {
        name: "Coal", bckgrnd: bckgrnd.coal, icon: icons.coal,
        color: colors.coal, layer: 4, show: true, checked: true, shadowed: true
      },
      {
        name: "Concrete", bckgrnd: bckgrnd.concrete, icon: icons.concrete,
        color: colors.concrete, layer: 6, show: true, checked: true, shadowed: true
      },
      {
        name: "Copper", bckgrnd: bckgrnd.copper, icon: icons.copper,
        color: colors.copper, layer: 7, show: true, checked: true, shadowed: true
      },
      {
        name: "Crystal", bckgrnd: bckgrnd.crystal, icon: icons.crystal,
        color: colors.crystal, layer: 8, show: true, checked: true, shadowed: true
      },
      {
        name: "Fertilizer", bckgrnd: bckgrnd.fertilizer, icon: icons.fertilizer,
        color: colors.fertilizer, layer: 10, show: true, checked: true, shadowed: false
      },
      {
        name: "Nuclear Material", bckgrnd: bckgrnd.uranium, icon: icons.uranium,
        color: colors.uranium, layer: 9, show: true, checked: true, shadowed: true
      },
      {
        name: "Oil", bckgrnd: bckgrnd.oil, icon: icons.oil,
        color: colors.oil, layer: 1, show: true, checked: true, shadowed: false
      },
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

  collapseMenu = (collapsed) => {
    let currentState = this.state.collapsed;
    let newState = true;
    if (currentState === true) {
      newState = false;
    }
    console.log(this.state.collapsed)
    console.log(newState)
    console.log("Collapse function called")
    this.setState({ collapsed: newState })
  }

  toggleAll = () => {
    console.log("toggle all function called!")
    let oldState = this.state.showAll;
    let newState = true;
    if (oldState === false) {
      newState = true;
      console.log(newState)
    } else if (oldState === true) {
      newState = false
      console.log(newState)
    }
    let modMaps = this.state.maps;

    modMaps.forEach(item => {
      item.show = newState;
      item.checked = newState;
    })

    console.log(modMaps)

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
        item.show = true;
        item.checked = true;
      } else {
        item.show = false;
        item.checked = false;
      }
    })
    // console.log(modMaps);
    this.setState({
      maps: modMaps,
      [name]: value
    });
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