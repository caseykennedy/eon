// HomePage:

// ___________________________________________________________________

import React from 'react'

import { Box } from '../ui'
import Button from '../ui/Button'

// Theme
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  // const data = useHomePage()
  return (
    <S.HomePage p={5}>
      <Box py={7} />
      <Box width={[1, 2 / 3]}>
        <h1>
          eOn is professional-grade hand sanitation made easy. One quick spray
          is all it takes to know your hands are 100% clean.
        </h1>
      </Box>

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
