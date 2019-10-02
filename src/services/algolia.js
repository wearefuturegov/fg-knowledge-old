import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID, 
    process.env.REACT_APP_ALGOLIA_API_KEY
)

const Hit = ({
    hit
}) => 
    <h1>{hit.fields.title["en-GB"]}</h1>

const Search = () =>
    <InstantSearch 
        searchClient={searchClient} 
        indexName="knowledge"
    >
        <SearchBox>

        </SearchBox>
        <Hits hitComponent={Hit}/>
    </InstantSearch>

export default Search