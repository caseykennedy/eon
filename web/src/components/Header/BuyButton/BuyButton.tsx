// BuyButton:

// ___________________________________________________________________

import React, { useContext, useState, useEffect, useCallback } from 'react'

// utils
import * as gtag from '../../../utils/gtag'

// Context
import StoreContext from '../../../context/StoreContext'
import useProduct from '../../../hooks/useProduct'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  setPortalOpen: any
  highlightBG: boolean
}

const BuyButton: React.FC<Props> = ({ setPortalOpen, highlightBG }) => {
  const products = useProduct()
  const product = products.edges[0].node
  const {
    variants,
    variants: [initialVariant]
  } = product

  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)

  const {
    addVariantToCart,
    store: { client, adding }
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then((fetchedProduct: any) => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          (variant: any) => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
    gtag.event({
      category: 'Buy Now button',
      action: 'Click',
      label: 'Header'
    })
  }

  return (
    <S.BuyButton
      type="submit"
      disabled={!available || adding}
      onClick={handleAddToCart}
      className={`${highlightBG ? 'header--stuck' : 'header--unstuck'}`}
      aria-label="Buy now"
    >
      {!adding ? 'Buy now' : 'Thank you'}
    </S.BuyButton>
  )
}

export default BuyButton
