import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import hero from "./hero.jpg"

const Image = styled.section`
    background-size: cover;
    background-position: top;
    background-image: url(${hero});
    min-height: 300px;
    @media screen and (min-width: 600px) {
        min-height: 400px;
        margin: 0 10px;
    }
    @media screen and (min-width: 1200px) {
        min-height: 500px;
    }
`
const TextBox = styled.div`
    max-width: ${theme.maxWidth};
    margin-top: -150px;
    padding: 0px 5%;
    @media screen and (min-width: 600px) {
        margin-top: -100px;
    }
    @media screen and (min-width: 1200px) {
        padding: 0px 10%;
    }
`

const Message = styled.span`
    display: block;
    padding: 20px;
    color: ${theme.grey};
    font-size: 1.3rem;
    background: ${theme.white};
    max-width: 80%;
    line-height: 1.3;
    @media screen and (min-width: 600px) {
        font-size: 1.6rem;
        max-width: 75%;
        padding: 25px;
    }
    @media screen and (min-width: 800px) {
        font-size: 1.8rem;
        padding: 30px;
    }
`

const Headline = styled.h1`
    display: inline;
    font-weight: 900;
    color: ${theme.dark};
    font-size: 1.3rem;
    margin-right: 5px;
    @media screen and (min-width: 600px) {
        font-size: 1.6rem;
    }
    @media screen and (min-width: 800px) {
        font-size: 1.8rem;
    }
`

const Hero = () =>
    <>
        <Image/>
        <TextBox>
            <Message>
                <Headline>Starting a project or looking for inspiration?</Headline>
                Here you’ll find a recommended selection of the best of FutureGov’s subject and practice knowledge.
            </Message>
        </TextBox>
    </>


export default Hero