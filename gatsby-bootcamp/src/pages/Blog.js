import React from "react"
import Layout from "../Components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allLoveJson(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            kristina
            ourMeet
            publishedDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allLoveJson.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.kristina}`}>
                <h2>{edge.node.ourMeet}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
