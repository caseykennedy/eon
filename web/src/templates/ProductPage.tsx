import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

import SEO from '../components/SEO'
import ProductForm from '../components/ProductForm'

// UI
import { Box, Flex } from '../components/ui'

// Components
import Layout from '../components/Layout'

const ProductPage: React.FC<{ data: ShopifyProductShape }> = ({ data }) => {
  const product = data.shopifyProduct
  console.log(product)
  return (
    <Layout>
      <Flex p={5}>
        <Box width={1 / 2}>
          {product.images && (
            <Box width={1 / 4}>
              {product.images.map(image => (
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  key={image.id}
                  alt={product.title}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box width={1 / 2}>
          <p>{product.title}</p>
          <p dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <ProductForm product={product} />
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
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
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
