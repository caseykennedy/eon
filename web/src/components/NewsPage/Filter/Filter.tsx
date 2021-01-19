// Filter Section:

// ___________________________________________________________________

import React, { useState } from 'react'

// Libraries

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'
import { Box } from '../../ui'

// Hooks
import usePost from '../../../hooks/usePost'

// Components
import Pill from '../../ui/Pill'
import Posts from '../Posts'

// ___________________________________________________________________

const Filter = () => {
  const posts = usePost()
  const categories = [{ title: 'News' }, { title: 'Press' }]

  // Filter posts
  const [items, setItems] = useState(posts)
  const [pillActive, setPillActive] = useState(false)
  const setFilteredItems = (category: string) => {
    setItems(
      posts.filter(item => {
        if (item.node.categories[0].title.includes(category)) {
          return item
        }
        if (
          item.node.categories[1] &&
          item.node.categories[1].title.includes(category)
        ) {
          return item
        }
      })
    )
  }
  // Reset / Show all
  const resetFilteredItems = () => {
    setItems(posts)
  }

  return (
    <S.Filter id="product-grid">
      <S.FilterNav>
        <Pill
          bg={theme.colors.lightgray}
          color={theme.colors.text}
          onClick={resetFilteredItems}
        >
          All
        </Pill>

        {categories.map((cat, idx) => (
          <div onClick={() => setFilteredItems(cat.title)} key={idx}>
            <Pill bg={theme.colors.lightgray} color={theme.colors.text}>
              {cat.title}
            </Pill>
          </div>
        ))}
      </S.FilterNav>

      <Box>
        <Posts items={items} />
      </Box>
    </S.Filter>
  )
}

export default Filter
