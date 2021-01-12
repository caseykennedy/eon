// Reviews Section:

// ___________________________________________________________________

// Libraries
import React from 'react'
import Swiper from 'react-id-swiper'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../ui'

// Components
import Stars from '../SVG/Stars'

// ___________________________________________________________________

type Props = {
  reviews: {
    lead: string
    author: string
    review: string
  }[]
}

const ReviewSlider: React.FC = ({ children }) => {
  const params = {
    freeMode: true,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    // effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 8,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Specs: React.FC<Props> = ({ reviews }) => {
  return (
    <S.Reviews>
      <Text as="p" mb={[5, 6, 6]}>What people are saying</Text>
      <ReviewSlider>
        {reviews.map((item, idx) => (
          <Flex className="review__card" key={idx}>
            <Flex alignItems="center" justifyContent="space-between">
              <p className="lead">{item.lead}</p>
            </Flex>
            <div className="review__rating">
              <Stars />
            </div>
            <Text as="span" mb={5} className="quote">
              {item.review}
            </Text>
            <p>{item.author}</p>
          </Flex>
        ))}
      </ReviewSlider>
    </S.Reviews>
  )
}

export default Specs
