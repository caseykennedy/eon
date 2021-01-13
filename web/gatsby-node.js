// Template pages

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions
  const PostTemplate = require.resolve('./src/templates/Post/Article/index.tsx')
  const ProductTemplate = require.resolve(
    './src/templates/HandSanitizer/index.tsx'
  )

  // Articles
  // ___________________________________________________________________

  const product = await graphql(`
    {
      products: allShopifyProduct {
        edges {
          node {
            id
            title
            handle
            productType
            description
            descriptionHtml
            shopifyId
            options {
              id
              name
              values
            }
            variants {
              id
              title
              price
              availableForSale
              shopifyId
              selectedOptions {
                name
                value
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images {
              originalSrc
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 900) {
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.products.edges.forEach(edge => {
      createPage({
        path: `/products/${edge.node.handle}/`,
        component: ProductTemplate,
        context: {
          product: edge.node
        }
      })
    })
  })

  // Articles
  // ___________________________________________________________________

  const post = await graphql(`
    {
      posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            title
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "MMM. DD, YYYY | hh:mma")
            slug {
              current
            }
            tags {
              tag
            }
            sources {
              title
              url
            }
            figure {
              alt
              asset {
                fluid(maxWidth: 800) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
              caption
            }
            categories {
              title
            }
            authors {
              name
              role
              avatar {
                asset {
                  fluid(maxWidth: 300) {
                    srcWebp
                    srcSetWebp
                    srcSet
                    src
                    sizes
                    base64
                    aspectRatio
                  }
                }
              }
            }
          }
          previous {
            slug {
              current
            }
            title
            _rawExcerpt
          }
          next {
            slug {
              current
            }
            title
            _rawExcerpt
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.posts.edges.forEach(edge => {
      createPage({
        path: `/news/${edge.node.slug.current}`,
        component: PostTemplate,
        context: {
          slug: edge.node.slug.current,
          post: edge.node,
          next: edge.next,
          prev: edge.previous
        }
      })
    })
  })

  // Return a Promise which will wait for all queries to resolve
  return Promise.all([product, post])
}
