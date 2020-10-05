import React from "react"
import { graphql } from "gatsby"

import Layout from "../Components/layout"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// export const query = graphql`
//   query {
//     allContentfulBlogPostAboutMyLove {
//       edges {
//         node {
//           kristina
//           ourMeet
//           publishedDate(formatString: "MMMM Do, YYYY")
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query($ourMeet: String!) {
      allContentfulBlogPostAboutMyLove(ourMeet: {eq: $ourMeet}) {
            kristina
            publishedDate(formatString: "MMMM Do, YYYY")
      }
    }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.allContentfulBlogPostAboutMyLove.kristina}</h1>
      <p>{props.data.allContentfulBlogPostAboutMyLove.publishedDate}</p>
    </Layout>
  )
}

export default Blog
