import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import eyeglass from "./eyeglass.svg"

const Outer = styled.section`
    padding: 0px 10%;
    position: relative;
    z-index: 1;
    @media screen and (min-width: ${theme.m}) {
        padding: 0px 15%;
        margin-top: -58px;
        margin-bottom: -58px;
    }
    @media screen and (min-width: ${theme.l}) {
        padding: 0px 15%;
        padding: 0px 15%;
        margin-top: -73.5px;
        margin-bottom: -73.5px;
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:before{
        content: "";
        position: absolute;
        left: 15px;
        top: 13px;
        cursor: pointer;
        pointer-events: none;
        display: block;
        width: 20px;
        height: 20px;
        background-image: url(${eyeglass});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        @media screen and (min-width: ${theme.l}) {
            left: 17px;
            top: 18px;
            width: 22px;
            height: 22px;
        }
    }
`

const Form = styled.form`
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    background: ${theme.white};
    padding: 15px 0px;
    @media screen and (min-width: ${theme.m}) {
        padding: 35px;
    }
    @media screen and (min-width: ${theme.l}) {
        padding: 45px;
    }
`

const Label = styled.label`
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
    padding-left: 50px;
    width: 100%;
    min-width: 1%;
    &::placeholder{
        color: ${theme.placeholder};
    }
    @media screen and (min-width: ${theme.l}) {
        font-size: 1.3em;
        padding: 15px;
        padding-left: 55px;
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const SearchBar = () => {

    const [query, setQuery] = useState("")

    const handleChange = e => {
        setQuery(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(query)
    }

    return(
        <Outer>
            <Form onSubmit={handleSubmit}>
                {/* <label htmlFor="type">I'd like to find:</label>
                <select name="type">
                    <option value="everything">Everything</option>
                    <option value="artefacts">Artefacts</option>
                </select> */}
                <Container>
                    <Label htmlFor="query">Search query</Label>
                    <Input
                        type="text"
                        name="query"
                        placeholder="Enter search terms"
                        required
                        value={query}
                        onChange={handleChange}
                    />
                </Container>
            </Form>
        </Outer>
    )
}

export default SearchBar