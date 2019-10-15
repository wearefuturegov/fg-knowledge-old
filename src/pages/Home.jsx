import React from "react"
import SiteHeader from "../components/SiteHeader"
import Hero from "../components/Hero"
import Tile, { TileGrid } from "../components/Tile"

const tileItems = [
    {
        headline: "Artefacts",
        deck: "Deliverables and examples of specific work",
        href: "/",
        cta: "See artefacts"
    },
    {
        headline: "Guides",
        deck: "Deliverables and examples of specific work",
        href: "/",
        cta: "See guides"
    },
    {
        headline: "Case studies",
        deck: "Deliverables and examples of specific work",
        href: "/",
        cta: "See case studies"
    },
    {
        headline: "Subject overviews",
        deck: "Deliverables and examples of specific work"
    },
]

const HomePage = () =>
    <>
        <SiteHeader/>
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