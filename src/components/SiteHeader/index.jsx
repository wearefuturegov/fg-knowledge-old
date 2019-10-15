import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"
import logo from "./logo.svg"
import whiteLogo from "./logo-white.svg"

const Outer = styled.header`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Masthead = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
`

const Logo = styled.img`
    max-width: 100%;
`

const Tag = styled.span`
    display: inline-block;
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.inverted ? theme.purple : theme.white};
    background-color: ${props => props.inverted ? theme.white: theme.purple};
    padding: 3px 7px;
    border-radius: 5px;
`

const Nav = styled.nav`
    display: none;
    @media screen and (min-width: 900px){
        display: block;
    }
`

const NavItem = styled(Link)`
    margin-right: 17px;
    font-size: 1.1rem;
    color: ${props => props.inverted ? theme.white : theme.dark};
    text-decoration: none;
    &:last-of-type{
        margin-right: 0px;
    }
    &:hover{
        border-bottom: 1px solid ${theme.dark};
        border-color: ${props => props.inverted && theme.white};
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const navItems = [
    {
        label: "Artefacts",
        href: "/"
    },
    {
        label: "Guides",
        href: "/"
    },
    {
        label: "Case studies",
        href: "/"
    }
]

const SiteHeader = ({
    inverted
}) =>
    <Outer>
        <Masthead to="/">
            <Logo 
                alt="FutureGov Knowledge"
                src={inverted ? whiteLogo : logo}
                />
            <Tag inverted={inverted}>Alpha</Tag>
        </Masthead>
        <Nav>
            {navItems.map(item =>
                <NavItem 
                    to={item.href} 
                    key={item.href} 
                    inverted={inverted}
                    >
                    {item.label}
                </NavItem>
            )}
        </Nav>
    </Outer>

export default SiteHeader