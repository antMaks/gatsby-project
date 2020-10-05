const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPostAboutMyLove {
        edges {
          node {
            kristina
            ourMeet
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPostAboutMyLove.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.kristina}`,
      context: {
        slug: edge.node.kristina
      }
    })
  })
}
