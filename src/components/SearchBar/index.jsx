import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import eyeglass from "./eyeglass.svg"
import downward from "./downward.svg"

const Outer = styled.section`
    position: relative;
    z-index: 1;
    @media screen and (min-width: ${theme.m}) {
        padding: 0px 15%;
        margin-top: -58px;
    }
    @media screen and (min-width: ${theme.l}) {
        padding: 0px 15%;
        padding: 0px 15%;
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

// const Select = styled.select`
//     font-size: 1.2em;
//     color: ${theme.dark};
//     padding: 10px;
//     border: 1px solid ${theme.lightGrey};
//     background: ${theme.panelBackground};
//     border-radius: 5px;
//     width: 100%;
//     min-width: 1%;
//     appearance: none;
//     background-image: url(${downward});
//     background-size: 25px;
//     background-repeat: no-repeat;
//     background-position: 96%;
//     &::placeholder{
//         color: ${theme.placeholder};
//     }
//     @media screen and (min-width: ${theme.l}) {
//         font-size: 1.3em;
//         padding: 15px;
//     }
//     &:focus{
//         outline: none;
//         box-shadow: 0px 0px 0px 3px ${theme.focus};
//     }
// `

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

const SearchBar = () => {

    const [scope, setScope] = useState("everything")
    const [query, setQuery] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log(query, scope)
    }

    return(
        <Outer>
            <Form onSubmit={handleSubmit}>
                    {/* <InvisibleLabel htmlFor="scope">Search for</InvisibleLabel>
                    <Select 
                        name="scope"
                        value={scope}
                        onChange={e => setScope(e.target.value)}
                    >
                        <option value="everything">Everything</option>
                        <option value="artefacts">Artefacts</option>
                    </Select> */}
                <Container>
                    <InvisibleLabel htmlFor="query">Search query</InvisibleLabel>
                    <Input
                        type="text"
                        name="query"
                        placeholder="Enter search terms"
                        required
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <Button><Img src={eyeglass} alt="Submit search"/></Button>
                </Container>

            </Form>
        </Outer>
    )
}

export default SearchBar