// GraphQL Types
// TODO:

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

type ShopifyProductShape = {
  shopifyProduct: ShopifyProductNode
}

type LineItem = {
  id: string
  title: string
  quantity: number
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
