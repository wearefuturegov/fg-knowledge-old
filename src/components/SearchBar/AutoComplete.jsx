import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { connectAutoComplete } from "react-instantsearch-dom"
import eyeglass from "./eyeglass.svg"
import { Link } from "react-router-dom"
import useClickOutside from "click-outside-hook"

const Form = styled.form`
    position: relative;
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
    z-index: 2;
    position: relative;
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

const InvisibleLabel = styled.label`
    font-size: 0;
    opacity: 0;
`

const Button = styled.button`
    position: absolute;
    z-index: 2;
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

const List = styled.ul`
    list-style: none;
    position: absolute;
    top: 100%;
    background: ${theme.white};
    width: 100%;
    border: 1px solid ${theme.lightGrey};
    border-width: 0px 1px 1px 1px;
    border-radius: 0px 0px 5px 5px;
    &:before{
        content: "";
        position: absolute;
        display: block;
        bottom: 100%;
        height: 10px;
        left: -1px;
        right: -1px;
        /* background: red; */
        border: 1px solid ${theme.lightGrey};
        border-width: 0px 1px;
        z-index: 1;
    }
`

const Result = styled.li`

`

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    padding: 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: ${theme.grey};
    @media screen and (min-width: ${theme.l}) {
        font-size: 1.3em;
        padding: 10px 15px;
    }
    &:hover{
        background: ${theme.panelBackground};
    }
`

const Autocomplete = ({ hits, currentRefinement, refine }) => {
    const [showResults, setShowResults] = useState(false)

    const ref = useClickOutside(() => setShowResults(false));

    return(
        <Form ref={ref}>
            <InvisibleLabel htmlFor="search">
                Search
            </InvisibleLabel>
            <Input
                type="search"
                id="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
                placeholder="Enter search terms"
                autoComplete="off"
                onFocus={()=> setShowResults(true)}
            />
            <Button>
                <Img src={eyeglass} alt="Search"/>
            </Button>
            {showResults && currentRefinement.length > 1 &&
                <List>
                    {hits.slice(0,6).map(hit => (
                        <Result key={hit.objectID}>
                            <StyledLink to={`/artefact/${hit.fields.slug && hit.fields.slug["en-GB"]}`}>
                                {hit.fields.title["en-GB"]}
                            </StyledLink>
                        </Result>
                    ))}
                </List>
            }
        </Form>
    )
}


export default connectAutoComplete(Autocomplete);
