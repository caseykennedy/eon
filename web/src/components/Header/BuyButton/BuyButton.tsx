// BuyButton:

// ___________________________________________________________________

import React, { useContext, useState, useEffect, useCallback } from 'react'

import StoreContext from '../../../context/StoreContext'
import useProduct from '../../../hooks/useProduct'

import { Box, Text } from '../../ui'
import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  shouldShowBackground: boolean
}

const BuyButton: React.FC<Props> = ({ shouldShowBackground }) => {
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
  }

  return (
    <S.BuyButton
      type="submit"
      disabled={!available || adding}
      onClick={handleAddToCart}
      className={`${shouldShowBackground && 'header--stuck'}`}
    >
      buy now
    </S.BuyButton>
  )
}

export default BuyButton
