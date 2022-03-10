const _ = require('lodash')
const path = require(`path`)

async function createBlogPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      posts(sort: { fields: [date] }) {
        edges {
          node {
            id
            slug
            link
          }
        }
      }
    }
  `)

/*   if (result.errors) throw new Error(result.errors)

  const { posts } = result.data

  await posts.edges.forEach(edge => {
    createPage({
      path: edge.node.link,
      component: path.resolve("./src/templates/blog-post-template.js"),
      context: {
        id: edge.node.id,
        slug: edge.node.link,
      },
    })
  })
 */
/*   await allWpProduct.edges.forEach(node => {
    createPage({
      path: `product/${node.node.id}`,
      component: path.resolve("./src/templates/product-template.js"),
      context: {
        id: node.node.id,
        slug: node.node.slug,
      },
    })
  }) */

/*   await allWpCategory.nodes.forEach(node => {
    const categoryPath = `/categories/${_.kebabCase(node.name)}`
    createPage({
      path: categoryPath,
      component: path.resolve("./src/templates/category-template.js"),
      context: { category: node.name },
    })
  })*/
} 

/* exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages(graphql, actions)
} */
