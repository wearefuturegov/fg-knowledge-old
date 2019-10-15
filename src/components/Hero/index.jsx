import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import SiteHeader from "../SiteHeader"

const Outer = styled.section`
    background-color: ${theme.purple};
`

const Inner = styled.section`
    padding: 20px;
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    @media screen and (min-width: 600px){
        padding: 45px 25px;
    }
    @media screen and (min-width: 900px){
        padding: 85px 25px;
    }
`

const Headline = styled.h1`
    color: ${theme.white};
    font-weight: 900;
    font-size: 2.2rem;
    @media screen and (min-width: 900px){
       font-size: 2.7em;
    }
`

const Hero = ({
    children
}) =>
    <Outer>
        <SiteHeader inverted/>
        <Inner>
            <Headline>Find inspiration from our best work</Headline>

        </Inner>
    </Outer>

export default Hero