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
      allWpProduct {
        edges {
          node {
            id
            slug
            productCategories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw new Error(result.errors)

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

  await result.data.allWpProduct.edges.forEach(node => {
    console.log(node);
    //let category = node.productCategories.nodes[0].name.toLowerCase()
    let slug = `shop/${node.slug}`
    createPage({
      path: slug,
      component: path.resolve("./src/templates/product-template.js"),
      context: {
        id: node.id,
        slug: slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages(graphql, actions)
}
