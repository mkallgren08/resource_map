import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import MapWrapper from "../../components/MapWrapper";
import MapProper from "../../components/MapProper";
import {ResoList} from "../../components/ResoList";

class MapPage extends Component {
  state = {
    searchterm : "",
    numberofrecords : 5,
    startyear : "",
    endyear : "",
    articles: [],
    savedarticles: [],
    text: "OH HAI"
  };

  render() {
    return (
      <Container fluid>
        <Row>
            <div >
            <MapWrapper>
              <MapProper >

              </MapProper>
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