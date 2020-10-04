import React, { useContext } from 'react'
import { Link } from 'gatsby'

// UI
import { Box } from '../../ui'

import StoreContext from '../../../context/StoreContext'

const LineItem: React.FC<{ item: LineItem }> = ({ item }) => {
  const {
    removeLineItem,
    store: { client, checkout }
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <div>
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <p>
        {item.title}
        {/* {item.variant.title !== 'Default Title' ? item.variant.title : ''} */}
      </p>
      {selectedOptions}
      {item.quantity}
      <Box mt={4} mb={8}>
        <button onClick={handleRemove}>Remove</button>
      </Box>
    </div>
  )
}

export default LineItem
