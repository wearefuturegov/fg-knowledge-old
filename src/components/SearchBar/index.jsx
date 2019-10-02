import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Search from "../../services/algolia"
import AutoComplete from "./AutoComplete"

const Outer = styled.section`
    position: relative;
    z-index: 1;
    @media screen and (min-width: ${theme.m}) {
        padding: 0px 12%;
        margin-top: -58px;
    }
    @media screen and (min-width: ${theme.l}) {
        margin-top: -73.5px;
    }
`

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    background: ${theme.white};
    padding: 20px 5%;
    @media screen and (min-width: ${theme.m}) {
        padding: 35px;
    }
    @media screen and (min-width: ${theme.l}) {
        padding: 40px;
    }
`

const Hit = ({
    hit
}) => 
    <h1>{hit.fields.title["en-GB"]}</h1>


    const SearchBar = () =>
    <Outer>
        <Container>
            <Search>
                <AutoComplete/>
            </Search>
        </Container>
    </Outer>

export default SearchBar