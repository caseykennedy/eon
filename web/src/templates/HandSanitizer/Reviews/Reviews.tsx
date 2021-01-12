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

const Specs: React.FC<Props> = () => {
  return (
    <S.Reviews bg="white" overflow="hidden" pt={0}>
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
    lead: 'Full coverage!',
    author: 'Mary Mills',
    review: 'I love how I am able to get good coverage on my hands!'
  },
  {
    lead: 'This product is incredible!',
    author: 'Edward, CA',
    review:
      'This product is incredible! Much better than the squeeze bottle goop we grew up on!'
  },
  {
    lead: 'Love the spray action',
    author: 'John, OH',
    review:
      'The strength of the continuous spray surprised me, as well as the even mist it leaves on hands. Oh and the lock cap "click" is really satisfying. Recommended!'
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
    author: 'Blake, CA',
    review:
      'I was tired of carrying around messy or ineffective gels, and wondered if there existed an easy to carry and use, industrial-grade "spray" hand sanitizer. eOn\'s just what I was looking for.'
  }
]
