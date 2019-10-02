import React, { useState, useEffect } from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import PageBody from "../components/PageBody"
import PromoModule from "../components/PromoModule"
import Card from "../components/Card"
import { fetchAllContent } from "../services/contentful"
import { Route } from "react-router-dom"
import Dialog from "../components/Dialog"

const Home = ({
    match
}) => {
    const [artefacts, setArtefacts] = useState([])
    const [guides, setGuides] = useState([])

    const getInitialData = async () => {
        let {artefactItems, guideItems} = await fetchAllContent()
        setArtefacts(artefactItems.slice(0, 6))
        setGuides(guideItems.slice(0, 6))
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
                <PromoModule
                    headline="Artefacts"
                    intro="Examples of design, tech and change artefacts from our projects."
                >
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

                <PromoModule
                    headline="How-to guides"
                    intro="Guides from each of FutureGov's practices"
                >
                    {guides.map(guide => 
                        <Card
                            key={guide.slug}
                            caption={guide.project}
                            headline={guide.title}
                            image={guide.image ? `https:${guide.image.fields.file.url}?w=400` : ""}
                            to={`/artefact/${guide.slug}`}
                        />
                    )}
                </PromoModule>

            </PageBody>
        </>
    )
}

export default Home