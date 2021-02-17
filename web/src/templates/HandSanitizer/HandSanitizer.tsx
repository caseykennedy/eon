// Hand Sanitizer Product Detail Template

// ___________________________________________________________________

import React from 'react'
import { graphql } from 'gatsby'

// UI
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../components/ui'

// Sections
import HeroNew from './HeroNew'
import Mist from './Mist'
import Specs from './Specs'
import Reviews from './Reviews'
import Retailers from './Retailers'
import ProductDetail from './ProductDetail'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Trademarks from './Trademarks'

// Types
import { ShopifyProductContextShape } from '@/types'

// ___________________________________________________________________

const HandSanitizer: React.FC<ShopifyProductContextShape> = ({
  pageContext
}) => {
  const product = pageContext.product
  return (
    <>
      <SEO
        pathname={`/products/${product.handle}`}
        title={`${product.title} | eOn mist disinfectants and personal sanitation`}
        desc={`${product.description}`}
        product={true}
        productName={product.title}
        banner={product.images[0].originalSrc}
        sku={product.variants[0].shopifyId}
        price={product.variants[0].price}
      />
      <HeroNew />
      <Trademarks />
      <Mist />
      <Specs />
      <ProductDetail />
      <Reviews />
      <Retailers />
    </>
  )
}

export default HandSanitizer
