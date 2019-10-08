import React, { useState, useEffect } from "react"
// import { SkeletonGroup } from "../components/Card/Skeleton"
// import { fetchAllContent } from "../lib/contentful"
// import { Route } from "react-router-dom"
// import Dialog from "../components/Dialog"
import Hero from "../components/Hero"
// import SearchBar from "../components/SearchBar"
// import PageBody from "../components/PageBody"
// import PromoModule from "../components/PromoModule"
// import Card from "../components/Card"

const Home = ({
    match
}) => {
    // const [artefacts, setArtefacts] = useState([])
    // const [guides, setGuides] = useState([])

    // const getInitialData = async () => {
    //     let {artefactItems, guideItems} = await fetchAllContent()
    //     setArtefacts(artefactItems.slice(0, 6))
    //     setGuides(guideItems.slice(0, 6))
    // }

    // useEffect(() => {
    //     getInitialData()
    // }, [])

    return(
        <>
            <Hero/>

            test
        </>
    )
}

export default Home