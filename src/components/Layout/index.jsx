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