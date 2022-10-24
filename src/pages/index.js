import * as React from "react"
import Navigation from "../components/navigation"
// import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
    <>
        <Navigation />  
    </>
    )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="ImJars" />

export default IndexPage
