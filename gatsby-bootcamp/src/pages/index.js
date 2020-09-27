import React from "react"
import { Link } from "gatsby"

import Layout from "../Components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>Im Maks, and yeby v rot tebya</h2>
      <p>
        Need a developer? <Link to="/Contact">contacts me</Link>
      </p>
    </Layout>
    
  )
}

export default IndexPage
