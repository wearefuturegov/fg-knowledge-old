import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled(Link)`
    background: ${theme.white};
    box-shadow: 0px 4px 2px ${theme.dark}50;
`

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const Inner = styled.div`
    padding: 25px;
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
        <Img src={image} alt=""/>
        <Inner>
            <Caption>{caption}</Caption>
            <Headline>{headline}</Headline>
        </Inner>
    </Outer>

export default Card