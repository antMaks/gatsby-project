import React from "react"
import { Link } from "gatsby"
import Layout from '../Components/layout'
const AboutPage = () => {
  return (
    <Layout>
    <h1>About Me</h1>
      <p> i write code</p>
      <p>
        <Link to="/Contact">Want to work with me? Reach on!</Link>
      </p>
    </Layout>
    
  )
}

export default AboutPage
