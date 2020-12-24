// Hand Sanitizer Product Detail Template

// ___________________________________________________________________

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

// UI
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// Sections
import Hero from './Hero'
import Mist from './Mist'
import Specs from './Specs'
import Reviews from './Reviews'
import Retailers from './Retailers'
import ProductDetail from './ProductDetail'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ProductForm from '../../components/ProductForm'

// ___________________________________________________________________

const HandSanitizer: React.FC<{ data: ShopifyProductShape }> = ({ data }) => {
  const product = data.shopifyProduct
  console.log(product)
  return (
    <Layout>
      <SEO
        pathname={`/products/${product.handle}`}
        title={`${product.title} | eOn mist disinfectants and personal sanitation`}
        desc={`${product.description} | `}
        individual={false}
        product={true}
        productName={product.title}
        productImage={product.images[0].originalSrc}
        productDesc={product.description}
        productSku={product.variants[0].shopifyId}
        productPrice={product.variants[0].price}
      />
      <Box>
        {/* <Flex p={5}>
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
              <h2>{product.title}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <ProductForm product={product} />
            </Box>
          </Flex> */}
        <Hero />
        <Mist />
        <Specs />
        <ProductDetail />
        <Reviews />
        <Retailers />
      </Box>
    </Layout>
  )
}

export default HandSanitizer

// ___________________________________________________________________

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
