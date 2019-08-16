import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./pages/Home"
import Artefact from "./pages/Artefact"

const App = () =>
  <Router>
    <Route path="/" component={Home} exact/>
    <Route path="/artefact/:id" component={Artefact} exact/>
  </Router>


export default App