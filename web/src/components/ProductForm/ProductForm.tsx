// Product form:

// ___________________________________________________________________

import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'

import StoreContext from '../../context/StoreContext'

// ___________________________________________________________________

const ProductForm: React.FC<{ product: ShopifyProductNode }> = ({
  product
}) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice }
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

  const handleQuantityChange = ({ target }: any) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name: string, value: string) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: `${name}`,
          value: `${value}`
        }
      ]
    })
    if (match === undefined) return true
    if (match.availableForSale) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency'
  }).format(variant.price)

  return (
    <>
      <h3>{price}</h3>
      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          <label htmlFor={name}>{name} </label>
          <select
            name={name}
            key={id}
            onChange={event => handleOptionChange(index, event)}
          >
            {values.map(value => (
              <option
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
              >
                {value}
              </option>
            ))}
          </select>
          <br />
        </React.Fragment>
      ))}
      <label htmlFor="quantity">Quantity </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />
      <br />
      <button
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

export default ProductForm
