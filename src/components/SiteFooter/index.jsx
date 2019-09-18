import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import logo from "./grey-logo.svg"

const Outer = styled.footer`
    padding: 30px 0px;
    background: white;
`

const Inner = styled.div`
    padding: 0px auto;
    margin: 0 5%;
    max-width: ${theme.maxWidth};
    @media screen and (min-width: ${theme.m}) {
        margin: 0px 12%;
    }
`

const Img = styled.img`
    max-width: 200px;
    margin-bottom: 7px;
`

const Message = styled.p`
    color: ${theme.grey};
    font-size: 0.9em;
`

const SiteFooter = () =>
    <Outer>
        <Inner>
            <Img src={logo} alt="Grey logo"/>
            <Message>Built and maintained by the FutureGov design practice.</Message>
        </Inner>
    </Outer>

export default SiteFooter