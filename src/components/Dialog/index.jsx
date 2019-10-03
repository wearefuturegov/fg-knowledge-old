import React, { useState, useEffect } from "react"
import { Dialog } from "@reach/dialog"
import { fetchArtefactBySlug } from "../../lib/contentful"
import styled from "styled-components"
import theme from "../_theme"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import cross from "./cross.svg"
import LinkBrick from "./LinkBrick"
import Skeleton from "./SkeletonDialog"

const StyledDialog = styled(Dialog)`
    max-width: 600px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 2px 4px ${theme.dark}25;
    position: relative;
    animation: throwUp 0.2s ease-out;
    @keyframes throwUp {
        from{
            transform: scale(1.1) translateY(5px);
            opacity: 0;
        }
        to{
            transform: scale(1) translateY(0px);
            opacity: 1;
        }
    }
`

const Header = styled.header`
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

const Headline = styled.h1`
    color: ${theme.dark};
    margin-bottom: 10px;
    @media screen and (min-width: ${theme.l}){
        font-size: 2.2em;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 2.4em;
        margin-bottom: 15px;
    }
`

const Description = styled.div`
    color: ${theme.dark};
    line-height: 1.4;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.1em;
    }
    p{
        margin-bottom: 10px;
    }
    *:last-child{
        margin-bottom: 0px;
    }
`

const FactoidList = styled.dl`
    display: grid;
    grid-row-gap: 30px;
    @media screen and (min-width: ${theme.m}){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 50px;
        grid-row-gap: 50px;
    }
`

const Label = styled.dt`
    color: ${theme.dark};
    font-weight: 600;
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 5px;
    @media screen and (min-width: ${theme.m}){
        margin-bottom: 10px;
    }
`

const Value = styled.dd`
    color: ${theme.dark};
    font-size: 1.3em;
    font-weight: 100;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.4em;
    }
`

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 2;
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};      
    }
`

const CloseImg = styled.img`
    width: 20px;
`

const ArtefactDialog = ({
    match,
    history,
}) => {

    const [artefact, setArtefact] = useState(false)

    useEffect(()=>{
        const loadData = async () => {
            let results = await fetchArtefactBySlug(match.params.slug)
            setArtefact(results[0].fields)
        }
        loadData()
    }, [match.params.slug])

    const handleDismiss = () => history.push("/")

    return(
        <StyledDialog onDismiss={handleDismiss}>
            <CloseButton onClick={handleDismiss}><CloseImg src={cross} alt="close"/></CloseButton>
            {artefact ?
                <>
                    <Header>
                        {artefact &&
                            <>
                                <Headline>{artefact.title}</Headline>
                                <Description>
                                    {documentToReactComponents(artefact.description)}
                                </Description>
                            </>
                        }
                    </Header>
                    <Body>

                        {artefact.fileUrLs &&
                            <LinkBrick 
                                href={artefact.fileUrLs[0]} 
                                image={artefact.image ? `https:${artefact.image.fields.file.url}?w=400` : ""}
                            />
                        }

                        <FactoidList>
                                <div>
                                    <Label>Client</Label>
                                    <Value>{(artefact.client && artefact.client.fields) ? artefact.client.fields.name : ""}</Value>
                                </div>
                                <div>
                                    <Label>Subject</Label>
                                    <Value>{artefact.subject ? artefact.subject.fields.name : ""}</Value>
                                </div>
                                <div>
                                    <Label>Project</Label>
                                    <Value>{artefact.project || ""}</Value>
                                </div>
                                <div>
                                    <Label>Point of contact</Label>
                                    <Value>{artefact.pointOfContact || ""}</Value>
                                </div>
                        </FactoidList>
                    </Body>
                </>
                :
                <Skeleton/>
            }
        </StyledDialog>
    )
  }


export default ArtefactDialog