import React from "react"
import {createClient} from "contentful"

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENT_DELIVERY_TOKEN
})

client.getEntries()
  .then(entries => {
    entries.items.forEach(entry => {
      console.log(entry)
    })
  })

const App = () =>
  <header>
    A test
  </header>


export default App