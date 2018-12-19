import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Checkbox } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import { MapProper, MapLayer } from "../../components/Maps";
import { ResoList } from "../../components/ResoList";
import oil from "./../../assets/images/resmap-oil.png";

class MapPage extends Component {
  state = {
    zoomedIn: true,
    text: "OH HAI",
    width: 0,
    height: 0,
    maps: [
      { name: "oil", bckgrnd: oil, layer: 1, show: true,checked: true }
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
    console.log(this.state.maps)
    const {checked, name} = event.target;
    console.log(checked);

    // const {name, checked} = event.target;
    // if (checked){
    //   checked = false
    // } else {
    //   checked = true
    // }
    let index = 0;
    let mappings = this.state.maps
    for(let i=0;i<mappings.length;i++){
      if (mappings[i].name === name){
        index = i;
      }
    }
    console.log(index);
    let show = this.state.maps[index].show
    let newStateBase = this.state;
    console.log(newStateBase.maps[index])
    newStateBase.maps[index].checked = checked;
    newStateBase.maps[index].show = checked;
    console.log(newStateBase.maps[index])
    this.setState({state:newStateBase})
    // this.setState({maps:[...this.state.maps[index].checked,checked]}, () => console.log(this.state))
    // setTimeout(function(){console.log(this.state)},3000)
  }

  zoomIn = () => {

  }

  render() {
    const maps = this.state.maps;

    return (
      <Container fluid>
        <Row>
          <div >
            <MapWrapper zoom={this.state.zoomedIn}>
              <MapProper zoom={this.state.zoomedIn} >

              </MapProper>
              {maps.map(item =>
                item.show ? <MapLayer key={item.name} zoom={this.state.zoomedIn} map={item} ></MapLayer> : <div key={item.name}></div>
              )}
              <ResoList text={this.state.text}>
                {maps.map(item =>
                  <Checkbox key={item.name} onChange={this.handleChange} type = 'checkbox' checked={item.checked} name={item.name} />
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