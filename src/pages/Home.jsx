import React from "react"
import SiteHeader from "../components/SiteHeader"
import Hero from "../components/Hero"

const HomePage = () =>
    <>
        <SiteHeader/>
        <Hero>
            <SiteHeader inverted/>
        </Hero>
    </>

export default HomePage