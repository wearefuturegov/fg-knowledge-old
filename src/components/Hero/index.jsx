import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import hero from "./hero.jpg"

const Image = styled.section`
    background-size: cover;
    background-position: center;
    background-image: url(${hero});
    min-height: 220px;
    @media screen and (min-width: 600px) {
        min-height: 400px;
        margin: 0 20px;
    }
    @media screen and (min-width: 1200px) {
        min-height: 450px;
        margin: 0 30px;
    }
`
const TextBox = styled.div`
    margin-top: -50px;
    padding: 0px 20px;
    @media screen and (min-width: 600px) {
        margin-top: -100px;
        padding: 0px 40px;
    }
    @media screen and (min-width: 1200px) {
        padding: 0px 60px;
    }
`

const Message = styled.span`
    display: block;
    padding: 20px;
    /* outline: 20px solid ${theme.white}; */
    color: ${theme.grey};
    font-size: 1.1rem;
    background: ${theme.white};
    line-height: 1.3;
    @media screen and (min-width: 600px) {
        padding: 25px;
        font-size: 1.6rem;
    }
    @media screen and (min-width: 800px) {
        padding: 30px;
        font-size: 1.9rem;
    }
    @media screen and (min-width: 1000px){
        padding: 40px;
        max-width: 66.67%;
    }
`

const Headline = styled.h1`
    font-weight: 900;
    color: ${theme.dark};
    font-size: 1.6rem;
    margin-right: 7px;
    margin-bottom: 5px;
    @media screen and (min-width: 600px) {
        display: inline;
    }
    @media screen and (min-width: 800px) {
        font-size: 1.9rem;
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