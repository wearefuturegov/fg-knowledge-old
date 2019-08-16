import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import loadable from "@loadable/component"

const Home = loadable(()=>import("./pages/Home"))
const Artefact = loadable(()=>import("./pages/Artefact"))

const App = () =>
  <Router>
    <Link to="/">Home</Link>
    <Link to="/artefact/derp">Artefact</Link>
    <Route path="/" component={Home} exact/>
    <Route path="/artefact/:id" component={Artefact} exact/>
  </Router>

export default App