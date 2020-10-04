import { any } from 'ramda'
import React from 'react'
import Client, { GraphModel, ShopResource } from 'shopify-buy'

export type StoreState = {
  client: ShopifyBuy.Client
  added: boolean
  adding: boolean
  checkout: {
    id: string
    lineItems: object[]
    webUrl: string
  }
  products: object[]
  shop: object
}

type ContextProps = {
  store: any
  addVariantToCart: (variantId: any, quantity: any) => Promise<void> | undefined
  removeLineItem: (
    client: any,
    checkoutID: string,
    lineItemID: string
  ) => void
  updateLineItem: (
    client: any,
    checkoutID: any,
    lineItemID: any,
    quantity: any
  ) => Promise<void>
}

const StoreContext = React.createContext<Partial<ContextProps>>({})

export default StoreContext
