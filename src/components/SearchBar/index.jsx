import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import eyeglass from "./eyeglass.svg"

const Outer = styled.section`
    padding: 20px 30px;
    @media screen and (min-width: 1200px) {
        padding: 20px 60px;
    }
`

const Inner = styled.div``

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

const SearchBar = () =>
    <Outer>
        <Inner>


        <Form>
            <InvisibleLabel htmlFor="search">
                Search
            </InvisibleLabel>
            <Input
                type="search"
                id="search"
                // value={currentRefinement}
                // onChange={event => refine(event.currentTarget.value)}
                placeholder="Enter search terms"
                autoComplete="off"
            />
            <Button>
                <Img src={eyeglass} alt="Search"/>
            </Button>
        </Form>


        </Inner>
    </Outer>

export default SearchBar