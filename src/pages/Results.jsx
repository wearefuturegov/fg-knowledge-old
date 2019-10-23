import React, { useEffect } from "react"
import { search } from "../lib/contentful"
import Search from "../lib/algolia"




const ResultsPage = () => {

    useEffect(()=>{
        search("service esign")
    }, [])

    return(
        <h1>Results page</h1>
    )
}

export default ResultsPage