import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    background: ${theme.white};
    text-decoration: none;
    transition: box-shadow 0.1s ease-out;
    min-height: 96px;
    display: flex;
    flex-direction: row;
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

const Inner = styled.div`
    padding: 25px;
    flex: 1;
    @media screen and (min-width: ${theme.l}){
        padding: 35px;
    }
`

const Image = styled.div`
    display: none;
    @media screen and (min-width: ${theme.ml}){
        display: block;
        width: 150px;
        height: 100;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
        background-color: ${theme.skeleton};
    }
`

const Headline = styled.div`
    background-color: ${theme.skeleton};
    width: 75%;
    height: 15px;
    border-radius: 100px;
`

const Caption = styled.div`
    background-color: ${theme.skeleton};
    width: 50%;
    height: 10px;
    margin-bottom: 10px;
    border-radius: 100px;
`

const SkeletonCard = () => 
    <Outer>
        <Image/>
        <Inner>
            <Caption/>
            <Headline/>
        </Inner>
    </Outer>

export default SkeletonCard

export const SkeletonGroup = () =>
    <>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
    </>