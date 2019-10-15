import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background-color: ${theme.purple};
`

const Hero = ({
    children
}) =>
    <Outer>
        {children}
    </Outer>

export default Hero