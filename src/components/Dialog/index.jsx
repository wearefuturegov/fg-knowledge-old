import React, { useState, useEffect } from "react"
import { Dialog } from "@reach/dialog"
import { fetchArtefactBySlug } from "../../services/contentful"
import styled from "styled-components"
import theme from "../_theme"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const StyledDialog = styled(Dialog)`
    max-width: 600px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 2px 4px ${theme.dark}25;
`

const Header = styled.header`
    padding: 25px;
`

const Body = styled.div`
    padding: 25px;
    background: ${theme.panelBackground};
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

    return(
        <StyledDialog onDismiss={() => history.push("/")}>
            {console.log(artefact.description)}
            <Header>
                <h1>{artefact.title}</h1>
                {documentToReactComponents(artefact.description)}
            </Header>
            <Body>
                Body
            </Body>
        </StyledDialog>
    )
  }


export default ArtefactDialog