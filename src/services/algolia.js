import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID, 
    process.env.REACT_APP_ALGOLIA_API_KEY
)


const Hit = (props) => 
    <h1>result {console.log(props)}</h1>


const Search = ({
    children
}) =>
    <InstantSearch 
        searchClient={searchClient} 
        indexName="knowledge"
    >
        {children}
    </InstantSearch>

export default Search