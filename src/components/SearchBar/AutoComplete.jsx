import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import eyeglass from "./eyeglass-white.svg"
import { Link } from "react-router-dom"
import { connectAutoComplete } from "react-instantsearch-dom"

const Form = styled.form`
    position: relative;
`

const Label = styled.label`
    font-size: 0;
    opacity: 0;
`

const Input = styled.input`
    width: 100%;
    background-color: transparent;
    color: ${theme.white};
    padding: 12px 0px;
    border: none;
    border-bottom: 2px solid ${theme.white};
    font-size: 1.3rem;
    &::placeholder{
        color: ${theme.placeholder};
    }
    &:focus{
        outline: none;
        border-color: ${theme.focus}
    }    
    @media screen and (min-width: 600px){
       font-size: 1.6rem;
    }
    @media screen and (min-width: 900px){
       font-size: 1.9rem;
    }
`

const Button = styled.button`
    position: absolute;
    top: 5px;
    right: 0px;
    height: 35px;
    width: 35px;
    background: ${theme.placeholderDark};
    border-radius: 100%;
    border: none;
    cursor: pointer;
    text-align: center;
    &:hover{
        background: white;
        img{
            filter: invert(1);
        }
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
    @media screen and (min-width: 600px){
        height: 40px;
        width: 40px;
    }
`

const Icon = styled.img`
    height: 15px;
    @media screen and (min-width: 600px){
        height: 18px;
    }
`

const Suggestions = styled.div`
    list-style: none;
    margin-top: 20px;
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    @media screen and (min-width: 500px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 900px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const Suggestion = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: ${theme.white};
    border-radius: 3px;
    text-decoration: none;
    background-color: rgba(255,255,255,0.05);
    &:hover{
        background-color: rgba(255,255,255,0.1);        
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const Title = styled.h3`
    font-weight: 900;
    margin-bottom: 15px;
`

const Collection = styled.p`
    font-size: 0.9rem;
`

const SearchBar = ({ hits, currentRefinement, refine }) => {
    console.log(hits)
    return(
        <>
            <Form
                method="get"
                action="/results"
            >
                <Label htmlFor="query">Search</Label>
                <Input
                    type="text"
                    name="query"
                    placeholder="Try 'journey map'..."
                    autoComplete="off"
                    value={currentRefinement}
                    onChange={event => refine(event.currentTarget.value)}
                />
                <Button type="submit">
                    <Icon src={eyeglass} alt="Submit search"/>
                </Button>
            </Form>

            {(hits.length > 0 && currentRefinement.length > 2) &&
                <Suggestions>
                    {hits.map(hit =>
                        <Suggestion>
                            <Title>{hit.title}</Title>
                            <Collection>{hit.collection}</Collection>
                        </Suggestion>                    
                    )}
                </Suggestions>            
            }
        </>
    )
}
 
export default connectAutoComplete(SearchBar)