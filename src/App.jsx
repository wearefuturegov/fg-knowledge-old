import React from "react"
import {BrowserRouter as Router, Switch} from "react-router-dom"
import AccessibleRoute from "./components/AccessibleRoute"
import loadable from "@loadable/component"
import Layout from "./components/Layout"

const Home = loadable(()=> import("./pages/Home"))
// const NotFound = loadable(()=> import("./pages/NotFound"))

const App = () =>
  <Router>
    <Layout>
      <Switch>
        <AccessibleRoute path="/" component={Home}/>
        {/* <AccessibleRoute component={NotFound}/> */}
      </Switch>
    </Layout>
  </Router>

export default App