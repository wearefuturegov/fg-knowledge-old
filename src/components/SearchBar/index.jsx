import React from "react"
import Search from "../../lib/algolia"
import AutoComplete from "./AutoComplete"

const SearchBar = () => 
    <Search>
        <AutoComplete/>
    </Search>

export default SearchBar