import React from "react"
import {BrowserRouter as Router, Switch} from "react-router-dom"
import AccessibleRoute from "./components/AccessibleRoute"
import loadable from "@loadable/component"
import Layout from "./components/Layout"

const Home = loadable(()=> import("./pages/Home"))
const Artefact = loadable(()=> import("./pages/Artefact"))
const NotFound = loadable(()=> import("./pages/NotFound"))

const App = () =>
  <Router>
    <Layout>
      <Switch>
        <AccessibleRoute path="/" component={Home} exact />
        <AccessibleRoute path="/artefact/:id" component={Artefact}/>
        <AccessibleRoute component={NotFound}/>
      </Switch>
    </Layout>
  </Router>

export default App