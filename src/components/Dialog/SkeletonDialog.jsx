import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    position: relative;
    @keyframes strobe {
        0% {
            background-position: -100% 0;
        }
        100% {
            background-position: 100% 0;
        }
    }
    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        animation-name: strobe;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        background: linear-gradient(
            to right,
            ${theme.placeholder} 0%,
            ${theme.placeholderDark} 50%,
            ${theme.placeholder} 100%
        );
        background-size: 50%;
        mix-blend-mode: overlay;
    }
`

const Header = styled.div`
    padding: 25px;
    @media screen and (min-width: ${theme.m}){
        padding: 35px;
    }
    @media screen and (min-width: ${theme.l}){
        padding: 45px;
    }
`

const Body = styled.div`
    padding: 35px 25px;
    background: ${theme.panelBackground};
    @media screen and (min-width: ${theme.m}){
        padding: 45px 35px;
    }
    @media screen and (min-width: ${theme.l}){
        padding: 45px;
    }
`

const Headline = styled.div`
    background-color: ${theme.skeleton};
    width: 50%;
    height: 35px;
    border-radius: 100px;
    margin-bottom: 20px;
    @media screen and (min-width: ${theme.l}){
        margin-bottom: 30px;
    }
`

const Description = styled.div`
    margin-bottom: 10px;
    background-color: ${theme.skeleton};
    width: 100%;
    height: 15px;
    border-radius: 100px;
    &:last-of-type{
        width: 50%;
    }
`

const FactoidList = styled.div`
    display: grid;
    grid-row-gap: 30px;
    @media screen and (min-width: ${theme.m}){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 50px;
    }
`

const Label = styled.div`
    background-color: ${theme.skeleton};
    width: 35%;
    height: 15px;
    border-radius: 100px;
    margin-bottom: 5px;
    @media screen and (min-width: ${theme.m}){
        margin-bottom: 10px;
    }
`

const Value = styled.div`
    background-color: ${theme.skeleton};
    width: 75%;
    height: 20px;
    border-radius: 100px;
`

const ArtefactDialogSkeleton = () =>
    <Outer>
        <Header>
            <Headline/>
            <Description/>
            <Description/>
            <Description/>
        </Header>
        <Body>
            <FactoidList>
                    <div>
                        <Label/>
                        <Value/>
                    </div>
                    <div>
                        <Label/>
                        <Value/>
                    </div>
                    <div>
                        <Label/>
                        <Value/>
                    </div>
                    <div>
                        <Label/>
                        <Value/>
                    </div>
            </FactoidList>
        </Body>
    </Outer>

export default ArtefactDialogSkeleton