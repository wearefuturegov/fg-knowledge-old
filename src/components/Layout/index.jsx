import React from "react"
import SiteHeader from "../SiteHeader"
import { createGlobalStyle } from "styled-components"

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Proxima Nova', sans-serif;
    }
`

const Layout = ({children}) =>
    <>
        <Style/>
        <SiteHeader/>
        {children}
    </>

export default Layout