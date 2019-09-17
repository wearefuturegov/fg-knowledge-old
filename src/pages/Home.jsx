import React, { useState, useEffect } from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import PageBody from "../components/PageBody"
import PromoModule from "../components/PromoModule"
import Card from "../components/Card"
import { fetchArtefacts } from "../services/contentful"

import { Route } from "react-router-dom"
import Dialog from "../components/Dialog"

const Home = ({
    match
}) => {
    const [artefacts, setArtefacts] = useState([])

    const getInitialData = async () => {
        setArtefacts(await fetchArtefacts())
    }

    useEffect(() => {
        getInitialData()
    }, [])

    return(
        <>
            <Route
                path={`/artefact/:slug`}
                component={Dialog}
            />
            <Hero/>
            <SearchBar/>
            <PageBody>
                <PromoModule>
                    {artefacts.map(artefact => 
                        <Card
                            key={artefact.slug}
                            caption={artefact.project}
                            headline={artefact.title}
                            image={artefact.image ? `https:${artefact.image.fields.file.url}?w=400` : ""}
                            to={`/artefact/${artefact.slug}`}
                        />
                    )}
                </PromoModule>
            </PageBody>
        </>
    )
}

export default Home