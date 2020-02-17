import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/form'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Contact />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
