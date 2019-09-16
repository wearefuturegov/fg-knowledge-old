import React from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"

import styled from "styled-components"
import theme from "../components/_theme"

const Main = styled.main`
    padding: 400px 0px;
    background: ${theme.panelBackground};
`

const Home = () =>
    <>
        <Hero/>
        <SearchBar/>
        <Main>

        </Main>
    </>

export default Home