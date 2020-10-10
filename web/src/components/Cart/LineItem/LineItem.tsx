// Line Item:

// ___________________________________________________________________

import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text } from '../../ui'
import { Input } from 'theme-ui'

// Components
import Icon from '../../Icons'

// Context
import StoreContext from '../../../context/StoreContext'

const LineItem: React.FC<{ item: LineItem }> = ({ item }) => {
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout, adding }
  } = useContext(StoreContext)

  const [quantity, setQuantity] = useState(item.quantity)
  const handleQuantityChange = ({ target }: any) => {
    setQuantity(target.value)
  }

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  const handleUpdate = () => {
    updateLineItem(client, checkout.id, item.id, quantity)
  }

  const VariantImage = () =>
    item.variant.image && (
      <img
        src={item.variant.image.src}
        alt={`${item.title} product shot`}
        width="100%"
      />
    )

  console.log(item)

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
              `calc(${theme.fontSizes[3]} / 1.5)`,
              `calc(${theme.fontSizes[3]} / 1.25)`
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
              name="quantity"
              min="1"
              step="1"
              onChange={handleQuantityChange}
              value={quantity}
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
