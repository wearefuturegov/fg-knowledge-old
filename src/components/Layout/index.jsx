import React from "react"
import SiteHeader from "../SiteHeader"
import styled, { createGlobalStyle } from "styled-components"
import theme from "../_theme"
import SiteFooter from "../SiteFooter"

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: proxima-nova, sans-serif; 
    }
    *::selection{
        background-color: ${theme.focus}50;
    }
        /* Dialog styles */
        :root {
        --reach-dialog: 1;
    }
    [data-reach-dialog-overlay] {
        background: ${theme.dark}75;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        z-index: 2;
        animation: fadeIn 0.1s ease-out;
    }

    @keyframes fadeIn{
        from{opacity:0}
        to{opacity:1}
    }

    [data-reach-dialog-content] {
        width: 80vw;
        margin: 10vh auto;
        background: white;
        outline: none;
        z-index: 3;
    }
`

const Wrapper = styled.div`
    background: ${theme.panelBackground}
`

const Layout = ({children}) =>
    <>
        <Style/>
        <Wrapper>
            <SiteHeader/>
            {children}
        </Wrapper>
        <SiteFooter/>
    </>

export default Layout