// useLegal hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

// ___________________________________________________________________

type Props = {
  legal: {
    edges: {
      node: {
        privacy: {
          _rawBody: string
          title: string
        }
        returns: {
          _rawBody: string
          title: string
        }
        terms: {
          _rawBody: string
          title: string
        }
      }
    }[]
  }
}

const useLegal = () => {
  const data = useStaticQuery<Props>(graphql`
    query LegalQuery {
      legal: allSanityLegal {
        edges {
          node {
            privacy {
              _rawBody
              title
            }
            returns {
              _rawBody
              title
            }
            terms {
              _rawBody
              title
            }
          }
        }
      }
    }
  `)

  return data.legal.edges[0].node
}

export default useLegal
