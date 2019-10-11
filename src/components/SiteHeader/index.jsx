import React from "react"
import logo from "./logo.svg"
import styled from "styled-components"
import theme from "../_theme"
import Nav from "../Nav"
import { Link } from "react-router-dom"

const Outer = styled.header`
    background: ${theme.white};
    padding: 20px;
    @media screen and (min-width: 1200px) {
        padding: 20px 30px;
    }
`

const Inner = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Masthead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const StyledLink = styled(Link)`
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus}
    }
`

const Logo = styled.img`
    display: block;
    width: 100%;
    max-width: 325px;
`

const Tag = styled.span`
    display: inline-block;
    margin-left: 10px;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.white};
    background-color: ${theme.purple};
    padding: 3px 7px;
    border-radius: 5px;
`

const SiteHeader = () =>
    <Outer>
        <Inner>
            <Masthead>
                <StyledLink to="/">
                    <h1><Logo src={logo} alt="FutureGov Knowledge"/></h1>
                </StyledLink>
                <Tag>Alpha</Tag>
            </Masthead>
            <Nav/>
        </Inner>
    </Outer>

export default SiteHeader