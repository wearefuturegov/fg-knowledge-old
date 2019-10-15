import React from "react"
import SiteHeader from "../components/SiteHeader"
import Hero from "../components/Hero"
import Tile, { TileGrid } from "../components/Tile"

const tileItems = [
    {
        headline: "Artefacts",
        deck: "Deliverables and examples of specific work",
        href: "/results?collection=artefacts",
        cta: "See artefacts"
    },
    {
        headline: "Guides",
        deck: "Learn how to work in an impactful way",
        href: "/results?collection=guides",
        cta: "See guides"
    },
    {
        headline: "Case studies",
        deck: "In-depth explorations of our most impactful projects",
        href: "/results?collection=case-studies",
        cta: "See case studies"
    },
    {
        headline: "Subject overviews",
        deck: "The state of the policy areas and domains we work in"
    },
]

const HomePage = () =>
    <>
        <Hero/>
        <TileGrid>
            {tileItems.map(item =>
                <Tile
                    headline={item.headline}
                    deck={item.deck}
                    href={item.href}
                    cta={item.cta}
                    key={item.headline}
                />    
            )}
        </TileGrid>
    </>

export default HomePage