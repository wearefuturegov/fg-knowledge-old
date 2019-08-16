import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"
import AccessibleRoute from "./components/AccessibleRoute"
import loadable from "@loadable/component"

const Home = loadable(()=>import("./pages/Home"))
const Artefact = loadable(()=>import("./pages/Artefact"))

const App = () =>
  <Router>
    <Link to="/">Home</Link>
    <Link to="/artefact/derp">Artefact</Link>

    <AccessibleRoute path="/" component={Home} exact/>
    <AccessibleRoute path="/artefact/:id" component={Artefact} exact/>
  </Router>

export default App