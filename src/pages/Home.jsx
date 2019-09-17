import React, { useState, useEffect } from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import PageBody from "../components/PageBody"
import PromoModule from "../components/PromoModule"
import Card from "../components/Card"
import { fetchArtefacts } from "../services/contentful"

const Home = () => {
    const [artefacts, setArtefacts] = useState([])

    const getInitialData = async () => {
        setArtefacts(await fetchArtefacts())
    }

    useEffect(() => {
        getInitialData()
    }, [])

    console.log(artefacts)

    return(
        <>
            <Hero/>
            <SearchBar/>
            <PageBody>
                <PromoModule>
                    {artefacts.map(artefact => 
                        <Card
                            key={artefact.slug}
                            caption={artefact.project}
                            headline={artefact.title}
                            to={`/artefact/${artefact.slug}`}
                        />
                    )}
                </PromoModule>
            </PageBody>
        </>
    )
}

export default Home