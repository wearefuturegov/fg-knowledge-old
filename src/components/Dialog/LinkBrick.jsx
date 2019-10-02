import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import external from "./external.svg"
import { truncateChars } from "../../services/utils"

const LinkBrick = styled.a`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: ${theme.white};
    box-shadow: 0px 2px 4px ${theme.dark}25;
    margin-bottom: 35px;
    text-decoration: none;
    position: relative;
    border-radius: 5px;
    transition: box-shadow 0.1s ease-out;
    @media screen and (min-width: ${theme.m}){
        margin-bottom: 45px;
    }
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    &:hover{
        box-shadow: 0px 2px 12px ${theme.dark}25 !important;
    }
`

const Image = styled.div`
    display: none;
    @media screen and (min-width: ${theme.ml}){
        display: block;
        width: 150px;
        filter: brightness(0.95);
        height: 100;
        background-image: url(${props => props.src});
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
    }
`

const Inner = styled.div`
    padding: 25px;
    word-wrap: break-word;
    @media screen and (min-width: ${theme.l}){
        padding: 35px;
    }
`

const Img = styled.img`
    width: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
`

const Message = styled.p`
    /* font-weight: bold; */
    color: ${theme.dark};
`

const Url = styled.p`
    color: ${theme.placeholder};
    margin-top: 5px;
`


const Brick = ({
    href,
    image
}) => 
    <LinkBrick href={href} target="blank">
        <Img src={external} alt=""/>

        <Image src={image}/>
        
        <Inner>
            <Message>View file</Message>
            <Url>{truncateChars(href, 40)}</Url>
        </Inner>
    </LinkBrick>

export default Brick