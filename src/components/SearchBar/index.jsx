import React from "react"
import styled from "styled-components"
import theme from "../_theme"
// import eyeglass from "./eyeglass.svg"
import Search from "../../services/algolia"
import { SearchBox, Hits } from "react-instantsearch-dom"

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

const Form = styled.form`
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    background: ${theme.white};
    padding: 20px 5%;
    @media screen and (min-width: ${theme.m}) {
        padding: 35px;
    }
    @media screen and (min-width: ${theme.l}) {
        padding: 45px;
    }
`

const Container = styled.div`
    position: relative;
`

const InvisibleLabel = styled.label`
    font-size: 0;
    opacity: 0;
`

const Input = styled.input`
    font-size: 1.2em;
    color: ${theme.dark};
    padding: 10px;
    border: 1px solid ${theme.lightGrey};
    background: ${theme.panelBackground};
    border-radius: 5px;
    width: 100%;
    min-width: 1%;
    &::placeholder{
        color: ${theme.placeholder};
    }
    @media screen and (min-width: ${theme.l}) {
        font-size: 1.3em;
        padding: 15px;
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const Button = styled.button`
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 0px 20px;
    border-radius: 0px 5px 5px 0px;
    cursor: pointer;
    background: ${theme.purple};
    border: none;
    &:hover{
        filter: brightness(1.2)
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const Img = styled.img`
    transform: translateY(3px);
`

const Hit = ({
    hit
}) => 
    <h1>{hit.fields.title["en-GB"]}</h1>


const SearchBar = () =>
    <Outer>

            <Container>
                <Search>

                <SearchBox/>
                <Hits hitComponent={Hit}/>

                </Search>
            </Container>

    </Outer>

export default SearchBar