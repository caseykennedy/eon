// HomePage:

// ___________________________________________________________________

import React from 'react'

import { Box, Button } from 'theme-ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage p={5}>
      <Box py={7} />
      <h1>
        sanitation you can count on in a convenient, easy to carry size. Plus,
        its high performance formulation means it doesn’t immediately dry your
        hands or leave them sticky.
      </h1>

      <p>
        Sanitation you can count on in a convenient, easy to carry size. Plus,
        its high performance formulation means it doesn’t immediately dry your
        hands or leave them sticky.
      </p>

      <br />
      <hr />
      <br />

      <h2>professional-grade hand sanitation, made easy.</h2>
      <h3>professional-grade hand sanitation, made easy.</h3>
      <h4>professional-grade hand sanitation, made easy.</h4>
      <h5>professional-grade hand sanitation, made easy.</h5>

      <br />
      <hr />
      <br />

      <p>
        Sanitation you can count on in a convenient, easy to carry size. Plus,
        its high performance formulation means it doesn’t immediately dry your
        hands or leave them sticky.
      </p>

      <p>
        <small>
          Sanitation you can count on in a convenient, easy to carry size. Plus,
          its high performance formulation means it doesn’t immediately dry your
          hands or leave them sticky.
        </small>
      </p>

      <p>
        <mark>Sanitation you can count on in a convenient,</mark> easy to carry
        size. Plus, its high performance formulation means it doesn’t
        immediately dry your hands or leave them sticky.
      </p>

      <Box my={6}>
        <Button variant="primary" mr={2}>
          button
        </Button>
        <Button variant="secondary" mr={2}>
          button
        </Button>
        <Button variant="outline" mr={2}>
          button
        </Button>
        <Button variant="disabled" mr={2}>
          button
        </Button>
      </Box>

      <hr />
      <br />

      <p>
        <a href="">Click here</a>
      </p>
    </S.HomePage>
  )
}

export default HomePage
