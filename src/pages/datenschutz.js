import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/datenschutz"

const IndexPage = () => (
    <Layout> 
      <SEO title="Datenschutz" />
      <About /> 
    </Layout>
  )

export default IndexPage
