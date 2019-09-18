import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled(Link)`
    background: ${theme.white};
    box-shadow: 0px 2px 4px ${theme.dark}10;
    /* display: block; */
    text-decoration: none;
    transition: box-shadow 0.1s ease-out;
    &:hover{
        box-shadow: 0px 2px 12px ${theme.dark}10 !important;
    }
    &:focus{
        outline: 3px solid ${theme.focus}
    }
    display: flex;
    flex-direction: row;
`

const Inner = styled.div`
    padding: 25px;
    @media screen and (min-width: ${theme.l}){
        padding: 35px;
    }
`

const Image = styled.div`
    display: none;
    @media screen and (min-width: ${theme.ml}){
        display: block;
        width: 150px;
        filter: brightness(0.95);
        height: 100;
        background-image: url(${props => props.src});
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
    }
`

const Headline = styled.h3`
    color: ${theme.dark};
`

const Caption = styled.p`
    color: ${theme.grey};
    font-size: 0.9em;
    margin-bottom: 5px;
`

const Card = ({
    headline,
    caption,
    to,
    image
}) => 
    <Outer to={to}>
        <Image src={image}/>
        <Inner>
            <Caption>{caption}</Caption>
            <Headline>{headline}</Headline>
        </Inner>
    </Outer>

export default Card