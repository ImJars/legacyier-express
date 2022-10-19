import * as React from "react"
import AboutMe from "../components/about-me"
import Blog from "../components/blog"
import Home from "../components/home"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Work from "../components/work"

const IndexPage = () => (
    <>
        <Home />
        <AboutMe />
        <Services />
        <Work />
        <Blog />
    </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="ImJars" />

export default IndexPage
