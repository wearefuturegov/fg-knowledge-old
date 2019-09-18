import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled(Link)`
    background: ${theme.white};
    box-shadow: 0px 2px 4px ${theme.dark}10;
    display: block;
    text-decoration: none;
    transition: box-shadow 0.1s ease-out;
    padding: 25px;
    &:hover{
        box-shadow: 0px 2px 12px ${theme.dark}10 !important;
    }
    &:focus{
        outline: 3px solid ${theme.focus}
    }
    @media screen and (min-width: ${theme.l}){
        padding: 35px;
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
        <Caption>{caption}</Caption>
        <Headline>{headline}</Headline>
    </Outer>

export default Card