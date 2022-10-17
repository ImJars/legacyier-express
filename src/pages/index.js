import * as React from "react"
import AboutMe from "../components/about-me"
import Home from "../components/home"
// import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
    <>
        <Home />
        <AboutMe />
    </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="ImJars" />

export default IndexPage
