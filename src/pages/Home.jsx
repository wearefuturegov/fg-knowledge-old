import React from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import PageBody from "../components/PageBody"
import styled from "styled-components"
import theme from "../components/_theme"
import { Link } from "react-router-dom"


const Header = styled.header`
    border-top: 1px solid ${theme.dark};
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const SeeAll = styled(Link)`
    &:hover{
        text-decoration: none;
    }
    &:active{
        color: ${theme.purple}
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus}
    }
`

const Home = () =>
    <>
        <Hero/>
        <SearchBar/>
        <PageBody>
            <Header>
                <h2>Artefacts</h2>
                <SeeAll to="/artefacts">See all</SeeAll>
            </Header>
        </PageBody>
    </>

export default Home