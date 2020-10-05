// Line Item:

// ___________________________________________________________________

import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'

// Theme
import * as S from './styles.scss'

// UI
import { Box, Flex } from '../../ui'

// Context
import StoreContext from '../../../context/StoreContext'

const LineItem: React.FC<{ item: LineItem }> = ({ item }) => {
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout }
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
        height="60px"
      />
    )

  return (
    <S.LineItem>
      <Flex>
        <Link to={`/product/${item.variant.product.handle}/`}>
          <VariantImage />
        </Link>
        <p>{item.title}</p>
      </Flex>
      <Flex width={1} my={4} justifyContent="flex-end">
        <Box mr={4}>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            onChange={handleQuantityChange}
            value={quantity}
          />{' '}
          <button onClick={handleUpdate}>update</button>
        </Box>
        | <Box as="button" ml={4} onClick={handleRemove}>Remove</Box>
      </Flex>
      {/* {selectedOptions} */}
      {/* <p>
        {item.title}
        {item.variant.title !== 'Default Title' ? item.variant.title : ''}
      </p> */}
    </S.LineItem>
  )
}

export default LineItem
