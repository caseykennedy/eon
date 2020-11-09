// Line Item:

// ___________________________________________________________________

import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'
import { Input, Slider } from 'theme-ui'

// Components
import Icon from '../../Icons'

// Context
import StoreContext from '../../../context/StoreContext'

const LineItem: React.FC<{ item: LineItem }> = ({ item }) => {
  const qtyRef = React.useRef<HTMLInputElement>(null)

  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout, adding }
  } = useContext(StoreContext)
  // Line item quantity state
  const [quantity, setQuantity] = useState(item.quantity)
  // Change the input quantity value
  const handleQuantityChange = ({ target }: any) => {
    setQuantity(target.value)
  }
  // Remove line item
  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }
  // Update cart quantity
  const handleUpdate = () => {
    updateLineItem(client, checkout.id, item.id, quantity)
  }

  const focusInput = () => {
    const element = qtyRef.current
    if (null !== element) {
      element.focus({
        preventScroll: true
      })
      console.log('should focus input')
    }
  }

  // const handleTouch = (e: Event) => {
  //   e.preventDefault()
  // }

  // React.useEffect(() => {
  //   window.addEventListener('touchmove', handleTouch)
  //   window.addEventListener('touchstart', handleTouch)

  //   return () => {
  //     window.removeEventListener('touchmove', handleTouch)
  //     window.removeEventListener('touchstart', handleTouch)
  //   }
  // }, [])

  // // Add / Remove one item from quantity + update cart
  // const decreaseProductAmount = async () => {
  //   if (quantity === 1) return
  //   try {
  //     await updateLineItem(client, checkout.id, item.id, quantity - 1)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // const increaseProductAmount = async () => {
  //   try {
  //     await updateLineItem(client, checkout.id, item.id, quantity + 1)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const preventDef = (e: any) => {
  //   e.preventDefault()
  // }

  // useEffect(() => {
  //   document.addEventListener('touchmove', preventDef, { passive: false })
  //   document.addEventListener('touchforcechange', preventDef, { passive: false })
  //   return () => {
  //     document.removeEventListener('touchmove', preventDef)
  //     document.removeEventListener('touchforcechange', preventDef)
  //   }
  // }, [])

  // Variant image
  const VariantImage = () =>
    item.variant.image && (
      <img
        src={item.variant.image.src}
        alt={`${item.title} product shot`}
        width="70%"
      />
    )

  return (
    <S.LineItem>
      <Flex className="line-item__product">
        <Box width={1 / 4}>
          <Link to={`/product/${item.variant.product.handle}/`}>
            <VariantImage />
          </Link>
        </Box>
        <Box width={3 / 4}>
          <Text
            as="p"
            fontSize={[
              `calc(${theme.fontSizes[2]} / 1)`,
              `calc(${theme.fontSizes[2]} * 1.25)`
            ]}
            fontWeight={500}
            mb={2}
          >
            {item.title}
          </Text>
          <Text as="p" fontSize={2} fontWeight={500}>
            ${item.variant.priceV2.amount}
          </Text>
        </Box>
      </Flex>

      <Flex width={1} className="line-item__utilities">
        <Box width={1 / 4} />
        <Flex width={3 / 4} className="utilities">
          <Flex pr={4}>
            <Box mr={2}>qty.</Box>
            <Input
              type="number"
              id="quantity"
              inputMode="numeric"
              name="quantity"
              min="1"
              step="1"
              pattern="[0-9]*"
              onChange={handleQuantityChange}
              value={quantity}
              ref={qtyRef}
              onClick={focusInput}
            />
            <button
              className="btn-update"
              disabled={adding}
              onClick={handleUpdate}
            >
              update
            </button>
          </Flex>
          <button onClick={handleRemove} className="btn-remove">
            <Icon name="plus" />
          </button>
        </Flex>
      </Flex>
    </S.LineItem>
  )
}

export default LineItem
