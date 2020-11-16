// useInstagram hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  instagram: {
    edges: {
      node: {
        id: string
        _rawCaption: string
        figure: {
          alt: string
          asset: {
            fluid: {
              srcWebp: string
              srcSetWebp: string
              srcSet: string
              src: string
              sizes: string
              base64: string
              aspectRatio: number
            }
          }
        }
        publishedAt: string
        title: string
      }
    }[]
  }
}

const useInstagram = () => {
  const data = useStaticQuery<Props>(graphql`
    query InstagramQuery {
      instagram: allSanityInstagram {
        edges {
          node {
            _rawCaption
            figure {
              alt
              asset {
                fluid(maxWidth: 600) {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
            publishedAt
            title
          }
        }
      }
    }
  `)

  return data.instagram.edges
}

export default useInstagram
