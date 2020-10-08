// useProduct hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type ProductShape = {
  product: {
    edges: {
      node: ShopifyProductNode
    }[]
  }
}

const useProduct = () => {
  const data = useStaticQuery<ProductShape>(graphql`
    query ProductQuery {
      product: allShopifyProduct(filter: {handle: {eq: "eon-continuous-spray-hand-sanitizer-80"}}) {
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
                  fluid(maxWidth: 910) {
                    tracedSVG
                    srcSetWebp
                    srcWebp
                    srcSet
                    src
                    sizes
                    base64
                    aspectRatio
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.product
}

export default useProduct
