import * as React from 'react'
import styled from 'styled-components'
import { Rotate } from '../../styles/transitions'
import theme from '../../gatsby-plugin-theme-ui'

type Props = {
  fill?: string
}

const Logo: React.FC<Props> = ({ fill }) => (
  <SVG viewBox="0 0 77.36 34.49">
    <title>eOn Sanitizing Mist</title>
    <path
      fill={fill}
      d="M14.81,13.73a9.65,9.65,0,0,0-5-1.3,9.66,9.66,0,0,0-5.08,1.35,9.51,9.51,0,0,0-3.47,3.7A11.15,11.15,0,0,0,0,22.87a10.81,10.81,0,0,0,1.33,5.38A9.62,9.62,0,0,0,5,31.94a10.72,10.72,0,0,0,5.35,1.33,11.16,11.16,0,0,0,3.75-.71,9.91,9.91,0,0,0,3.19-1.8,1.13,1.13,0,0,0,.42-.91,1.22,1.22,0,0,0-.5-.88,1.13,1.13,0,0,0-.88-.29,1.28,1.28,0,0,0-.87.37,6.08,6.08,0,0,1-2.25,1.25,9.1,9.1,0,0,1-2.86.49,7.78,7.78,0,0,1-4-1A7.22,7.22,0,0,1,3.65,27a8.12,8.12,0,0,1-.89-3.24H18.13a1.32,1.32,0,0,0,.93-.33,1.16,1.16,0,0,0,.37-.91,10.89,10.89,0,0,0-1.22-5.21A9.1,9.1,0,0,0,14.81,13.73Zm-5,1.19a7,7,0,0,1,3.78,1,6.72,6.72,0,0,1,2.48,2.79,7.71,7.71,0,0,1,.69,2.69H2.83a8,8,0,0,1,.77-2.69,7.07,7.07,0,0,1,2.54-2.79A6.76,6.76,0,0,1,9.81,14.92Z"
    />
    <path
      fill={fill}
      d="M49.33,9a1.44,1.44,0,1,0-2,2.05,11.86,11.86,0,0,1,0,17,12.48,12.48,0,0,1-17.4,0,11.86,11.86,0,0,1,0-17,12.36,12.36,0,0,1,8.77-3.52l0,4.91,6.5-6.18L38.75,0l0,4.7A15.23,15.23,0,0,0,27.9,9a14.73,14.73,0,0,0,0,21.1,15.37,15.37,0,0,0,21.43,0,14.71,14.71,0,0,0,0-21.1Z"
    />
    <path
      fill={fill}
      d="M76.1,16.86a8.4,8.4,0,0,0-3.47-3.24,10.92,10.92,0,0,0-4.93-1.1,9.49,9.49,0,0,0-4.47,1.07,8.64,8.64,0,0,0-2.41,1.91V14.09a1.3,1.3,0,0,0-.36-1,1.49,1.49,0,0,0-1.92,0,1.24,1.24,0,0,0-.39,1V31.93a1.27,1.27,0,0,0,.38.94,1.34,1.34,0,0,0,1,.38,1.27,1.27,0,0,0,1.33-1.32V20.72a4.8,4.8,0,0,1,.9-2.84,6.08,6.08,0,0,1,2.45-2,8.38,8.38,0,0,1,3.53-.73,8.14,8.14,0,0,1,3.58.77,5.88,5.88,0,0,1,2.49,2.28,7.43,7.43,0,0,1,.92,3.88v9.85a1.27,1.27,0,0,0,.38.94,1.3,1.3,0,0,0,1,.38,1.34,1.34,0,0,0,1-.38,1.27,1.27,0,0,0,.38-.94V22.08A10.16,10.16,0,0,0,76.1,16.86Z"
    />
  </SVG>
)

export default Logo

const SVG = styled.svg`
  &:hover {
    .refresh {
      transform-origin: center center;
      animation: ${Rotate} 20s infinite linear;
    }
  }
`
