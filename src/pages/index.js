import * as React from "react"
import AboutMe from "../components/about-me"
import Blog from "../components/blog"
import Contact from "../components/contact"
import Home from "../components/home"
import Menu from "../components/menu"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Work from "../components/work"

const IndexPage = () => (
    <>
        <Menu />
        <Home />
        <AboutMe />
        <Services />
        <Work />
        <Blog />
        <Contact />
    </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="ImJars" />

export default IndexPage
