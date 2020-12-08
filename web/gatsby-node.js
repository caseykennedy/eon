const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.handle}/`,
        component: path.resolve(`./src/templates/HandSanitizer.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
  })
}
