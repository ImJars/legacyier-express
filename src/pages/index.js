import * as React from "react"
import Blog from "../components/blog"
import Contact from "../components/contact"
import Navigation from "../components/navigation"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Work from "../components/work"

const IndexPage = () => (
    <>
        <Navigation />  
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
