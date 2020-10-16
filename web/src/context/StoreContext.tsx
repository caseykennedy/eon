import React from 'react'

export type StoreState = {
  client: ShopifyBuy.Client
  added?: boolean
  adding?: boolean
  checkout: {
    id: string
    lineItems: {
      quantity: number
    }[]
    webUrl?: string
  }
  products?: object[]
  shop?: object
}

type ContextProps = {
  isCartOpen: boolean
  setCartOpen: (arg1: boolean) => any
  store: StoreState
  addVariantToCart: (variantId: any, quantity: number) => Promise<void>
  removeLineItem: (
    client: any,
    checkoutID: string,
    lineItemID: string
  ) => Promise<void>
  updateLineItem: (
    client: any,
    checkoutID: any,
    lineItemID: any,
    quantity: any
  ) => Promise<void>
}

const StoreContext = React.createContext<ContextProps>({})

export default StoreContext
