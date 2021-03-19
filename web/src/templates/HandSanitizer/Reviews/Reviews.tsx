// Reviews Section:

// ___________________________________________________________________

// Libraries
import React from 'react'
import Swiper from 'react-id-swiper'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text } from '../../../components/ui'

// Components
import Stars from '../../../components/SVG/Stars'

// ___________________________________________________________________

type Props = {}

const ReviewSlider: React.FC = ({ children }) => {
  const params = {
    freeMode: true,
    grabCursor: true,
    loop: false,
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

const Specs: React.FC<Props> = () => {
  return (
    <S.Reviews
      bg="white"
      overflow="hidden"
      maxWidth={theme.maxWidth}
      id="ratings"
    >
      <Text as="p" mb={[5, 6, 6]}>
        What people are saying
      </Text>
      <ReviewSlider>
        {data.map((item, idx) => (
          <Box className="review__card" key={idx}>
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
          </Box>
        ))}
      </ReviewSlider>
    </S.Reviews>
  )
}

export default Specs

const data = [
  {
    lead: 'Compact and easy to spray.',
    author: 'Samara',
    review: "I love that it's compact and easy to spray."
  },
  {
    lead: 'Not filmy or foamy.',
    author: 'Paul, AZ',
    review:
      'I like this product because it is clean, not filmy or foamy like other products.'
  },
  {
    lead: 'Easy to use.',
    author: 'Alicia, MI',
    review: 'Safe and effective. Easy to use. '
  },
  {
    lead: "Isn't harmful to our bodies.",
    author: 'Anne, OH',
    review:
      "It's wonderful to know that a company is making a product that kill covid but isn't harmful to our bodies or our environment!"
  },
  {
    lead: 'Full coverage!',
    author: 'Mary Mills',
    review: 'I love how I am able to get good coverage on my hands!'
  },
  {
    lead: 'Product is great!',
    author: 'BreAnna McLean',
    review: 'Product is great and it shipped fast.'
  },
  {
    lead: 'Convenient!',
    author: 'Mary, WA',
    review:
      'Before we get out of the car I make my children hold out their hands and spray them all. It covers their tiny hands in one quick second. Makes safety simple.'
  },
  {
    lead: 'Wonderful!',
    author: 'Mark, FL',
    review:
      'I carry it in my pocket and bring it out for a quick spray when needed, the feeling of clean it leaves on my hands feels great and I definitely feel protected from taking germs to my face or bringing them back home to my family.'
  },
  {
    lead: 'Thank you, eOn!!',
    author: 'Thomasena, PA',
    review: 'Quick, effective and easy to travel '
  }
]
