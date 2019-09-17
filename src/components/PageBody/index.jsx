import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.main`
    padding: 40px 5%;
    background: ${theme.panelBackground};
    @media screen and (min-width: ${theme.m}) {
        padding: 110px 15%;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
`

const PageBody = ({
    children
}) =>
    <Outer>
        <Inner>
            {children}
        </Inner>
    </Outer>


export default PageBody