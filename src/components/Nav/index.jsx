import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import theme from "../_theme"

const Navigation = styled.nav`
    display: none;
    @media screen and (min-width: 900px){
        display: block;
    }
`

const Ul = styled.ul`
    list-style: none;
`

const Li = styled.li`
    display: inline;
    margin-right: 17px;
    font-size: 1.1rem;
    &:last-of-type{
        margin-right: 0px;
    }
`

const StyledLink = styled(Link)`
    color: ${theme.dark};
    text-decoration: none;
    transition: border-bottom .1s ease-out;
    &:hover{
        border-bottom: 1px solid ${theme.dark};
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus}
    }
`

const menuItems = [
    {
        label: "Teams",
        to: "/teams"
    },
    {
        label: "Artefacts",
        to: "/artefacts"
    },
    {
        label: "Guides",
        to: "/guides"
    },
    {
        label: "Add your work",
        to: "/add-work"
    }
]

const Nav = () =>
    <Navigation>
        <Ul>
            {menuItems.map(item =>
                <Li key={item.label}><StyledLink to={item.to}>{item.label}</StyledLink></Li>    
            )}
        </Ul>
    </Navigation>

export default Nav