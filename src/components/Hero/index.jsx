import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import hero from "./hero.jpg"

const Outer = styled.section`
    background-size: cover;
    background-position: center;
    background-image: url(${hero});
    padding: 50px 10%;
    @media screen and (min-width: ${theme.m}) {
        padding: 90px 15%;
    }
`

const Inner = styled.div`
    margin: 0 auto;
    max-width: ${theme.maxWidth};
`

const TextBox = styled.div`
    padding: 25px;
    background: rgba(255,255,255,0.9);
    max-width: 85%;
    @media screen and (min-width: ${theme.m}) {
        padding: 35px;
        max-width: 400px;
    }
    @media screen and (min-width: ${theme.l}) {
        max-width: 500px;
    }
`

const Headline = styled.h2`
    color: ${theme.dark};
    margin-bottom: 10px;
    @media screen and (min-width: ${theme.m}) {
        font-size: 2em;
        margin-bottom: 15px;
    }
    @media screen and (min-width: ${theme.m}) {
        font-size: 2.3em;
        margin-bottom: 20px;
    }
`

const Slugline = styled.p`
    color: ${theme.dark};
    @media screen and (min-width: ${theme.m}) {
        font-size: 1.2em;
    }
    @media screen and (min-width: ${theme.m}) {
        font-size: 1.3em;
    }
    
`

const Hero = () =>
    <Outer>
        <Inner>
            <TextBox>
                <Headline>Starting a project, or looking for inspiration?</Headline>
                <Slugline>Here you’ll find a recommended selection of the best of FutureGov’s subject and practice knowledge.</Slugline>
            </TextBox>
        </Inner>
    </Outer>

export default Hero