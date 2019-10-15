import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.header`
    padding: 40px 20px;
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    @media screen and (min-width: 900px){
        padding: 55px 25px;
    }
`

const Message = styled.p`
    color: ${theme.grey};
    max-width: 450px;
    font-size: 0.9em;
`

const SiteFooter = () =>
    <Outer>
        <Message>FutureGov Knowledge is built and maintained by the technology and product design practice. Get help on <strong>#knowledge-management</strong>.</Message>
    </Outer>

export default SiteFooter