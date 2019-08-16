import React from "react"
import {BrowserRouter as Router, Link, Switch} from "react-router-dom"
import AccessibleRoute from "./components/AccessibleRoute"
import loadable from "@loadable/component"

const Home = loadable(()=>import("./pages/Home"))
const Artefact = loadable(()=>import("./pages/Artefact"))
const NotFound = loadable(()=>import("./pages/NotFound"))

const App = () =>
  <Router>
    <Link to="/">Home</Link>
    <Link to="/artefact/derp">Artefact</Link>

    <Switch>
      <AccessibleRoute path="/" component={Home} exact />
      <AccessibleRoute path="/artefact/:id" component={Artefact}/>
      <AccessibleRoute component={NotFound}/>
    </Switch>

  </Router>

export default App