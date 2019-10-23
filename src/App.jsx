import React from "react"
import {BrowserRouter as Router, Switch} from "react-router-dom"
import AccessibleRoute from "./components/AccessibleRoute"
import loadable from "@loadable/component"
import Layout from "./components/Layout"

const Home = loadable(()=> import("./pages/Home"))
const Results = loadable(()=> import("./pages/Results"))
// const NotFound = loadable(()=> import("./pages/NotFound"))

const App = () =>
  <Router>
    <Layout>
      <Switch>
        <AccessibleRoute path="/" component={Home} exact/>
        <AccessibleRoute path="/results" component={Results}/>
        {/* <AccessibleRoute component={NotFound}/> */}
      </Switch>
    </Layout>
  </Router>

export default App