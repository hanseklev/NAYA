const path = require(`path`)

async function createBlogPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) throw new Error(errors)

  await result.data.allWpPost.nodes.forEach(node => {

    createPage({
      path: `post/${node.slug}`,
      component: path.resolve("./src/templates/blog-post-template.js"),
      context: {
        id: node.id,
        slug: node.slug,
      },
    })
  })

}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages(graphql, actions)
}
