// Shine

// ___________________________________________________________________

import * as React from 'react'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Shine = () => (
  <SVG viewBox="0 0 206.63 250.27">
    <line className="cls-1" x1="73.84" y1="102.59" x2="73.84" y2="158.01" />
    <line className="cls-1" x1="73.84" y1="194.85" x2="73.84" y2="250.27" />
    <line className="cls-1" y1="176.43" x2="55.42" y2="176.43" />
    <line className="cls-1" x1="92.26" y1="176.43" x2="147.68" y2="176.43" />
    <line className="cls-1" x1="122.18" y1="232.24" x2="85.9" y2="190.36" />
    <line className="cls-1" x1="61.78" y1="162.51" x2="25.5" y2="120.62" />
    <line className="cls-1" x1="129.65" y1="128.09" x2="87.77" y2="164.37" />
    <line className="cls-1" x1="59.91" y1="188.49" x2="18.03" y2="224.77" />
    <line className="cls-1" x1="177.88" x2="177.88" y2="21.58" />
    <line className="cls-1" x1="177.88" y1="35.93" x2="177.88" y2="57.5" />
    <line className="cls-1" x1="149.13" y1="28.75" x2="170.71" y2="28.75" />
    <line className="cls-1" x1="185.06" y1="28.75" x2="206.63" y2="28.75" />
  </SVG>
)

export default Shine

const SVG = styled.svg`
  .cls-1 {
    fill: none;
    stroke: ${theme.colors.black};
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }
`
