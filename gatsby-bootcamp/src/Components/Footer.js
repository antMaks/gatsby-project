import React from "react"
import { graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>
        Created by<span> {data.site.siteMetadata.author}</span>, 2020
      </p>
    </footer>
  )
}

export default Footer
