import React from "react"
import styled, { css } from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"
import arrow from "./arrow.svg"

const tileStyles = css`
    display: block;
    background-color: ${theme.white};
    padding: 25px;
    border: 0.5px solid ${theme.placeholder};
    border-radius: 3px;
    @media screen and (min-width: 500px){
        padding: 30px;
    }
    &:hover span::after{
        transform: translateX(3px);
    }
`

const Outer = styled(Link)`
    ${tileStyles}    
    text-decoration: none;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

const OuterStatic = styled.div`
    ${tileStyles}
`

const Headline = styled.h3`
    color: ${theme.dark};
    margin-bottom: 5px;
    font-size: 1.4em;
`

const Deck = styled.p`
    color: ${theme.grey};
    margin-bottom: 15px;
`

const Cta = styled.span`
    font-weight: 900;
    color: ${theme.purple};
    display: flex;
    align-items: center;
    &::after{
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        background-image: url(${arrow});
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 7px;
        transition: 0.2s ease-out;
        /* transform: translateY(2px); */
    }
`

const ComingSoon = styled.p`
    color: ${theme.dark};
    font-weight: 900;
`

export const TileGrid = styled.section`
    padding: 20px;
    max-width: ${theme.maxWidth};
    margin: 0 auto;
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

const Tile = ({
    headline,
    deck,
    href,
    cta
}) =>
    <>
        {href ?
            <Outer to={href || null}>
                <Headline>{headline}</Headline>
                <Deck>{deck}</Deck>
                <Cta>{cta}</Cta>
            </Outer>
            :
            <OuterStatic>
                <Headline>{headline}</Headline>
                <Deck>{deck}</Deck>
                <ComingSoon>Coming soon</ComingSoon>
            </OuterStatic>
        }
    </>

export default Tile