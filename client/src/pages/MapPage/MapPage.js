import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import MapProper from "../../components/MapProper";
import { ResoList } from "../../components/ResoList";

class MapPage extends Component {
  state = {
    zoomedIn: true,
    text: "OH HAI",
    width: 0,
    height: 0
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

  zoomIn = () => {

  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div >
            <MapWrapper zoom={this.state.zoomedIn}>
              {this.state.zoomedIn ? (
                <MapProper zoom={this.state.zoomedIn}>
                  <h1> TEST TEST</h1>
                </MapProper>
              ) : (
                <MapProper zoom={this.state.zoomedIn}>
                
                </MapProper>
              )}
              <ResoList text={this.state.text}>

              </ResoList>
            </MapWrapper>
          </div>

        </Row>
      </Container>
    );
  }
}

export default MapPage;