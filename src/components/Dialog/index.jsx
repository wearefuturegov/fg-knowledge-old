import React, { useState, useEffect } from "react"
import { Dialog } from "@reach/dialog"
import { fetchArtefactBySlug } from "../../services/contentful"


const StyledDialog = ({
    match,
    history,
}) => {

    const [artefact, setArtefact] = useState(false)



    console.log(artefact)

    useEffect(()=>{
        const loadData = async () => {
            let results = await fetchArtefactBySlug(match.params.slug)
            setArtefact(results[0].fields)
        }
        loadData()
    }, [match.params.slug])

    return(
        <Dialog onDismiss={() => history.push("/")}>

            <h1>{artefact.title}</h1>
            
            blaaaah
        </Dialog>
    )
  }


export default StyledDialog