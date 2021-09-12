import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/impressum"

const IndexPage = () => (
    <Layout> 
      <SEO title="Impressum" />
      <About /> 
    </Layout>
  )

export default IndexPage
