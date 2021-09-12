import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/kursplan"

const IndexPage = () => (
    <Layout> 
      <SEO title="Kurse" />
      <About /> 
    </Layout>
  )

export default IndexPage
