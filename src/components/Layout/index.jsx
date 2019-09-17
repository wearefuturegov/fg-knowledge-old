import React from "react"
import SiteHeader from "../SiteHeader"
import { createGlobalStyle } from "styled-components"
import theme from "../_theme"
import SiteFooter from "../SiteFooter"

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: proxima-nova, sans-serif; 
    }
    
    body{
        background: ${theme.panelBackground};
    }

    *::selection{
        background-color: ${theme.focus}50;
    }

`

const Layout = ({children}) =>
    <>
        <Style/>
        <SiteHeader/>
        {children}
        <SiteFooter/>
    </>

export default Layout