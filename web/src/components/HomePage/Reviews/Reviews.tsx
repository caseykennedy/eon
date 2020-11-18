// Reviews Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

import { Box, Flex, Heading, Text } from '../../ui'

// Components
import Stars from '../../Stars'

// Libraries
import Swiper from 'react-id-swiper'

// ___________________________________________________________________

type Props = {}

const ReviewSlider: React.FC = ({ children }) => {
  const params = {
    freeMode: true,
    grabCursor: true,
    // loop: true,
    centeredSlides: true,
    // effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
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
    <S.Reviews bg="white" overflow="hidden">
      <Text className="text--md">What people are saying</Text>
      <br />
      <br />
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
    lead: 'Thank you, eOn!!',
    author: 'Blake, CA',
    review:
      'I was tired of carrying around messy or ineffective gels, and wondered if there existed an easy to carry and use, industrial-grade "spray" hand sanitizer. eOn\'s just what I was looking for.'
  },
  {
    lead: 'My hands feel refreshed!',
    author: 'Jenny, AZ',
    review:
      'I take it with me wherever I go, from the gym to the restaurant, one single spray gives me the confidence my hands are clean and completely germ free. Thanks for the cool product!'
  },
  {
    lead: 'Love the spray action',
    author: 'John, OH',
    review:
      'The strength of the continuous spray surprised me, as well as the even mist it leaves on hands. Oh and the lock cap "click" is really satisfying. Recommended!'
  },
  {
    lead: 'No mess!',
    author: 'Teresa, TX',
    review:
      "It's just easier to spray and mist hands while on the go, it saves time and with 80% ethyl alcohol, I know I’m getting professional sanitation."
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
  }
]
