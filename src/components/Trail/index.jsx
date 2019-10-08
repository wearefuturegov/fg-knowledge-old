import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"

const Outer = styled(Link)`
    /* display: flex;
    flex-direction: row;
    background: ${theme.white};
    box-shadow: 0px 2px 4px rgba(0,0,0,0.15);
    min-height: 120px;
    text-decoration: none;
    &:focus{
        outline: 3px solid ${theme.focus};
    } */
`

const Title = styled.h3`
    /* font-size: 1.2em;
    color: ${theme.grey};
    font-weight: 400;
    margin-bottom: 10px; */
`

const Team = styled.p`
    /* display: inline;
    color: ${theme.dark};
    font-weight: 800;
    margin-right: 5px; */
`

const Collection = styled(Link)`
    /* font-size: 0.8em;
    color: ${theme.grey};
    text-decoration: none;
    margin-top: auto;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    } */
`

const Trail = ({
    team,
    title,
    collection,
    href
}) =>
    <Outer href={href}>
        <Title>
            <Team>{team}</Team>
            {title}
        </Title>
        <Collection href={`/${collection}`}>{collection}</Collection>
    </Outer>

export default Trail