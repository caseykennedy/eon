// GraphQL Types
// TODO:

import { GraphModel, LineItem } from 'shopify-buy'

type ImageShape = {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64: string
  tracedSVG: string
  srcWebp: string
  srcSetWebp: string
}

// Post shape
// ___________________________________________________________________

type PostShape = {
  posts: {
    edges: PostEdges[]
  }
}

type PostEdges = {
  node: PostQuery
}

type PostData = {
  post: PostQuery
}

type PostQuery = {
  _rawExcerpt: string
  _rawBody: string
  _id: string
  authors: PostAuthor
  categories: {
    title: string
  }[]
  figure: {
    alt: string
    asset: {
      fluid: {
        src: string
        aspectRatio: number
        base64: string
        sizes: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
    caption: string
  }
  title: string
  publishedAt: string
  slug: {
    current: string
  }
  tags: {
    tag: string
  }[]
  sources: {
    title
    url
  }[]
}

type PostAuthor = {
  name: string
  role: string
  avatar: {
    asset: {
      fluid: {
        aspectRatio: number
        base64: string
        sizes: string
        src: string
        srcSet: string
        srcSetWebp: string
        srcWebp: string
      }
    }
  }
}

type PostContextShape = {
  pageContext: {
    post: PostQuery
    prev: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
    next: {
      _rawExcerpt: string
      title: string
      slug: {
        current: string
      }
    }
  }
}

// Instagram
// ___________________________________________________________________

type InstagramFeedShape = {
  instagram: InstagramFeedEdges
}

type InstagramFeedEdges = {
  edges: {
    node: InstagramFeedNode
  }[]
}

type InstagramFeedNode = {
  id: string
  _rawCaption: string
  figure: {
    alt: string
    asset: {
      fluid: ImageShape
    }
  }
  publishedAt: string
  title: string
}

// Shopify Product
// ___________________________________________________________________

type ShopifyProductNode = {
  id: string
  title: string
  handle: string
  productType: string
  description: string
  descriptionHtml: string
  shopifyId: string
  options: {
    id: string
    name: string
    values: string[]
  }[]
  variants: {
    id: string
    title: string
    price: number
    availableForSale: boolean
    shopifyId: string
    selectedOptions: {
      name: string
      value: string
    }
  }[]
  priceRange: {
    minVariantPrice: {
      amount: number
      currencyCode: string
    }
    maxVariantPrice: {
      amount: number
      currencyCode: string
    }
  }
  images: {
    originalSrc: string
    id: string
    localFile: {
      childImageSharp: {
        fluid: ImageShape
      }
    }
  }[]
}

type ShopifyProductContextShape = {
  pageContext: {
    product: ShopifyProductNode
  }
}

type LineItemShape = {
  id: string
  title: string
  quantity: number
  discountAllocations: {}[]
  variant: {
    id: string
    title: string
    image: {
      src: string
    }
    product: ShopifyProductNode
    selectedOptions: {
      name: string
      value: string
    }[]
    priceV2: {
      amount: string
      currencyCode: string
    }
  }
}

type ContextStore = {
  client: any
  adding: boolean
  checkout: {
    id: string
    lineItems: object[]
  }
  products: object[]
  shop: {}
}

type ContextProps = {
  store: ContextStore
  addVariantToCart: any
  removeLineItem: any
  updateLineItem: any
}
