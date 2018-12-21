import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Test from "./pages/Test";
import MapPage from "./pages/MapPage"

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faAngleDoubleLeft,faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo,faAngleDoubleLeft,faAngleDoubleRight)

const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={MapPage} />
    {/* <Route exact path="/Test" component={Test} /> */}
    {/* <Route exact path="/Test/:id" component={Test} /> */}
    {/* <Test /> */}
  </div>
  </Router>
);


export default App;
