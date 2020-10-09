// Reviews Section:

// ___________________________________________________________________

import React from 'react'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

import { Box, Flex, Heading } from '../../ui'
import { Grid, Cell } from 'styled-css-grid'
import Section from '../../Section'

// Libraries
import Swiper from 'react-id-swiper'

// ___________________________________________________________________

type Props = {}

const ReviewSlider: React.FC = ({ children }) => {
  const params = {
    freeMode: true,
    // loop: true,
    centeredSlides: true,
    // effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 64
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true
      }
    }
  }
  return <Swiper {...params}>{children}</Swiper>
}

const Specs: React.FC<Props> = () => {
  return (
    <S.Reviews bg="white">
      <h4>Reviews</h4>
      <br />
      <br />
      <ReviewSlider>
        {data.map((item, idx) => (
          <Box className="review__card" key={idx}>
            <p>{item.author}</p>
            <h3 className="text--lg">
              {item.review}
            </h3>
          </Box>
        ))}
      </ReviewSlider>
    </S.Reviews>
  )
}

export default Specs

const data = [
  {
    author: 'Betty Sue',
    review:
      'I carry it in my pocket and bring it out for a quick spray when needed, the feeling of clean it leaves on my hands feels great and I definitely feel protected from taking germs to my face or bringing them back home to my family.'
  },
  {
    author: 'Phillip Fidelisk',
    review:
      'I carry it in my pocket and bring it out for a quick spray when needed, the feeling of clean it leaves on my hands feels great.'
  },
  {
    author: 'Betty Sue',
    review:
      'I carry it in my pocket and bring it out for a quick spray when needed, the feeling of clean it leaves on my hands feels great and I definitely feel protected from taking germs to my face or bringing.'
  },
  {
    author: 'Phillip Fidelisk',
    review:
      'I carry it in my pocket and bring it out for a quick spray when needed, the feeling of clean it leaves on my hands feels great.'
  },
  {
    author: 'Betty Sue',
    review:
      'I carry it in my pocket and spray when needed, the feeling of clean it leaves on my hands feels great and I definitely feel protected from taking germs to my face or bringing them back home to my family.'
  }
]
