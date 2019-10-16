import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import SiteHeader from "../SiteHeader"
import SearchBar from "../SearchBar"

const Outer = styled.section`
    background-color: ${theme.purple};
`

const Inner = styled.section`
    padding: 30px 20px;
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
    margin-bottom: 15px;
    @media screen and (min-width: 900px){
       font-size: 2.7rem;
       margin-bottom: 20px;
    }
`

const Message = styled.p`
    color: ${theme.white};
    margin-top: 25px;
    @media screen and (min-width: 900px){
       margin-top: 30px;
    }
`

const Hero = ({
    children
}) =>
    <Outer>
        <SiteHeader inverted/>
        <Inner>
            <Headline>Find inspiration from our best work</Headline>
            <SearchBar/>
            <Message>You can search for artefacts/deliverables, guides or case studies from any of FutureGov’s practices.</Message>
        </Inner>
    </Outer>

export default Hero