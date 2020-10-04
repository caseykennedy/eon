import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Button'
import { Flex, Box, Text } from '../ui'
import strings from './strings.json'

type Props = {
  currentAmount: any
  increaseAmount: any
  decreaseAmount: any
}

const { ariaIncreaseButton, ariaDecreaseButton } = strings

const StyledButton = styled.button`
  width: 20px;
  &:focus {
    outline: none;
  }
`

const ProductCounter: React.FC<Props> = ({
  currentAmount,
  increaseAmount,
  decreaseAmount
}) => {
  return (
    <Flex sx={{ borderBottom: '1px', borderBottomStyle: 'solid' }}>
      <Box width={1 / 3} textAlign="left">
        <StyledButton
          onClick={decreaseAmount}
          aria-label={ariaDecreaseButton}
          variant="increase-decrease"
          px={1}
        >
          -
        </StyledButton>
      </Box>

      <Box width={1 / 3} textAlign="center" p={1}>
        <Text textAlign="center">{currentAmount}</Text>
      </Box>
      <Box width={1 / 3} textAlign="right">
        <StyledButton
          onClick={increaseAmount}
          aria-label={ariaIncreaseButton}
          variant="increase-decrease"
          px={1}
        >
          +
        </StyledButton>
      </Box>
    </Flex>
  )
}

export default ProductCounter
