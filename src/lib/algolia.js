import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch } from "react-instantsearch-dom"

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID, 
    process.env.REACT_APP_ALGOLIA_API_KEY
)

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