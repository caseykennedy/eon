// AddToCart:

// ___________________________________________________________________

import React, { useContext, useState, useEffect, useCallback } from 'react'

import StoreContext from '../../context/StoreContext'
import useProduct from '../../hooks/useProduct'

// utils
import * as gtag from '../../utils/gtag'

import { Box } from '../ui'
import Icon from '../Icons'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  btnText?: string
  linkText?: string
  trackEventLabel?: string
}

const AddToCart: React.FC<Props> = ({ btnText, linkText, trackEventLabel }) => {
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
    if (!linkText) {
      gtag.event({
        category: 'Buy Now button',
        action: 'Click',
        label: `${trackEventLabel}`
      })
    } else {
      gtag.event({
        category: 'Buy Now text link',
        action: 'Click',
        label: `${trackEventLabel}`
      })
    }
  }

  return !linkText ? (
    <S.AddToCart
      as="button"
      type="submit"
      disabled={!available || adding}
      onClick={handleAddToCart}
      aria-label="Buy now"
    >
      {!adding ? btnText : 'Thank you'}
      {!adding ? <span>$4.49</span> : <Box className="smiley">😃</Box>}
    </S.AddToCart>
  ) : (
    <S.TextLink as="span" onClick={handleAddToCart} aria-label="Buy now">
      {!adding ? linkText : 'thank you 😃'}
    </S.TextLink>
  )
}

export default AddToCart

// ___________________________________________________________________

const defaultProps = {
  btnText: 'Add to cart',
  trackEventLabel: 'unlabeled'
}

AddToCart.defaultProps = defaultProps
