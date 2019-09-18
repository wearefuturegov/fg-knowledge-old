import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"

const Outer = styled.section`
    border-top: 1px solid ${theme.dark};
    padding-top: 10px;
    @media screen and (min-width: ${theme.m}){
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 40px;
        padding-top: 25px;
    }
    @media screen and (min-width: ${theme.l}){
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 80px;
    }
    /* @media screen and (min-width: ${theme.xl}){
        grid-column-gap: 60px;
    } */
`

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.m}){
        display: block;
        margin-bottom: 15px;
    }
`

const SeeAll = styled(Link)`
    color: ${theme.purple};
    font-weight: bold;
    &:hover{
        text-decoration: none;
    }
    &:active{
        color: ${theme.purple}
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const Headline = styled.h2`
    color: ${theme.dark};
    @media screen and (min-width: ${theme.m}){
        font-size: 2em;
        margin-bottom: 10px;
    }
`

const Intro = styled.p`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
        font-size: 1.1em;
        color: ${theme.dark};
        margin-bottom: 15px;
    }
`

const ContentArea = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    grid-template-rows: 1fr 1fr;
    @media screen and (min-width: ${theme.s}){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }
`

const PromoModule = ({
    children
}) =>
    <Outer>
        <Header>
            <Headline>Artefacts</Headline>
            <Intro>Examples of design, tech and change artefacts from our projects.</Intro>
            <SeeAll to="/artefacts">See all</SeeAll>
        </Header>
        <ContentArea>
            {children}
        </ContentArea>
    </Outer>


export default PromoModule