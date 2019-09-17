import React from "react"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import PageBody from "../components/PageBody"
import PromoModule from "../components/PromoModule"

const Home = () =>
    <>
        <Hero/>
        <SearchBar/>
        <PageBody>
            <PromoModule/>
        </PageBody>
    </>

export default Home