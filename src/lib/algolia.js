import React from "react"
import algoliasearch from "algoliasearch/lite"
import { 
    InstantSearch, 
    // SearchBox,
    // Hits,
    // Highlight
} from "react-instantsearch-dom"

const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID, 
    process.env.REACT_APP_ALGOLIA_API_KEY
)

// const Hit = ({
//     hit
// }) =>
//     <div>
//         <Highlight hit={hit} attributeName="name"/>
//         {/* <p>{hit.fields.team && hit.fields.team["en-GB"]}</p> */}
//         <h3>{hit.fields.name && hit.fields.name["en-GB"]}</h3>
//         <h3>{hit.fields.title && hit.fields.title["en-GB"]}</h3>
//         <p>{hit.sys.contentType.sys.id}</p>
//     </div>

const Search = ({
    children
}) =>
    <InstantSearch 
        searchClient={searchClient} 
        indexName="knowledge"
    >
        {/* <SearchBox
            translations={{
                placeholder: "Try 'journey map'..."
            }}
        />
        <Hits
            hitComponent={Hit}
        /> */}
        {children}
    </InstantSearch>

export default Search