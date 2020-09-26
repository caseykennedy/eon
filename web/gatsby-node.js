const hasOwnProp = require('has-own-prop')
const R = require('ramda')

const productTemplate = require.resolve('./src/templates/product/index.tsx')
const cartTemplate = require.resolve('./src/templates/cart/index.tsx')
// const catalogTemplate = require.resolve('./src/templates/catalog/index.jsx')
// const mainPageTemplate = require.resolve('./src/templates/main/index.jsx')
// const policyTemplate = require.resolve('./src/templates/policy/index.jsx')
// const blogTemplate = require.resolve('./src/templates/blog/index.jsx')
// const pageTemplate = require.resolve('./src/templates/page/index.jsx')
// const articleTemplate = require.resolve(
//   './src/templates/blog/article/index.jsx'
// )

const typeDefs = require('./typedefs')

let isShopifyLite = false
let enableWebp = true

// Used as workaround (together with cache) to store and access Blogs ids and handles while creating fields for Articles
let availableBlogs = []

function removeTrailingLeadingSlashes(string) {
  return string.replace(/^\/*|\/*$/g, '')
}

const createProductNode = (options, actions, node) => {
  let { basePath = '', productPageBasePath = 'product' } = options
  const { createNodeField } = actions
  basePath = removeTrailingLeadingSlashes(basePath)
  productPageBasePath = removeTrailingLeadingSlashes(productPageBasePath)

  // Todo: Improve the way this is done. Maybe using the config.json file.
  createNodeField({
    node,
    name: 'shopifyThemePath',
    value: `${basePath && `/${basePath}`}/${productPageBasePath}/${node.handle}`
  })

  createNodeField({
    node,
    name: 'firstImage',
    value: node.images[0] ? node.images[0] : {}
  })
}

const createCollectionNode = (options, actions, node) => {
  let { basePath = '', collectionPageBasePath = 'collection' } = options
  const { createNodeField } = actions
  basePath = removeTrailingLeadingSlashes(basePath)
  collectionPageBasePath = removeTrailingLeadingSlashes(collectionPageBasePath)
  // Todo: Improve the way this is done. Maybe using the config.json file.
  createNodeField({
    node,
    name: 'shopifyThemePath',
    value: `${basePath && `/${basePath}`}/${collectionPageBasePath}/${
      node.handle
    }`
  })
}



const createProductsPages = async (graphql, createPage, finalCartPagePath) => {
  const queryProducts = await graphql(`
    {
      products: allShopifyProduct {
        nodes {
          handle
          fields {
            shopifyThemePath
          }
        }
      }
    }
  `)
  queryProducts.data.products.nodes.forEach(({ handle, fields }) => {
    const { shopifyThemePath } = fields
    createPage({
      path: shopifyThemePath,
      component: productTemplate,
      context: {
        handle,
        // Todo: Find a better way to do this.
        cartUrl: finalCartPagePath,
        enableWebp
      }
    })
  })
}

exports.onPreInit = (_, pluginOptions) => {
  isShopifyLite = hasOwnProp(pluginOptions, 'shopifyLite')
    ? pluginOptions.shopifyLite
    : false
  enableWebp = hasOwnProp(pluginOptions, 'enableWebp')
    ? pluginOptions.enableWebp
    : true
}

exports.onCreateNode = async ({ node, actions, cache }, options) => {
  switch (node.internal.type) {
    case `ShopifyProduct`:
      createProductNode(options, actions, node)
      break
    default: // do nothing
  }
}

exports.createPages = async ({ graphql, actions }, options) => {
  const gatsbyStorefrontConfig = await graphql(`
    {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            productsPerCollectionPage
            articlesPerBlogPage
          }
        }
      }
    }
  `)
  const {
    productsPerCollectionPage = 9,
    articlesPerBlogPage = 6
  } = gatsbyStorefrontConfig.data.site.siteMetadata.gatsbyStorefrontConfig

  const { createPage } = actions
  let { cartPagePath = 'cart', basePath = '' } = options
  basePath = removeTrailingLeadingSlashes(basePath)
  cartPagePath = removeTrailingLeadingSlashes(cartPagePath)

  const finalCartPagePath = `${basePath && `/${basePath}`}/${cartPagePath}`
  createPage({
    path: finalCartPagePath,
    component: cartTemplate
  })

  // await createMainPage(basePath, graphql, createPage)

  // await createCollectionsPages(
  //   graphql,
  //   productsPerCollectionPage,
  //   createPage,
  //   finalCartPagePath
  // )

  await createProductsPages(graphql, createPage, finalCartPagePath)

  // await createPoliciesPages(graphql, createPage, finalCartPagePath)

  // In case Shopify Lite plan we don't have data to create Pages, Blogs and Articles
  // if (!isShopifyLite) {
  //   await createPagePages(graphql, createPage, finalCartPagePath)

  //   const queryArticles = await createArticlePages(
  //     graphql,
  //     createPage,
  //     finalCartPagePath
  //   )

  //   await createBlogPages(
  //     graphql,
  //     queryArticles,
  //     articlesPerBlogPage,
  //     createPage,
  //     finalCartPagePath
  //   )
  // }
}

exports.createSchemaCustomization = ({ actions }) => {
  // Here we define types.
  // We need it in case some data wasn't set up, but queries need to pass verification during build process.
  // While build process GatsbyJS extracts queries and checks them against schema (see https://www.gatsbyjs.org/docs/query-extraction/).

  const { createTypes } = actions
  createTypes(typeDefs)
}
