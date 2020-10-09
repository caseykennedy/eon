import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
import Client from 'shopify-buy/index.unoptimized.umd'

import Context from '../context/StoreContext'

type Props = {
  children: React.ReactNode
}

const client = Client.buildClient(
  {
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
    domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`
  },
  fetch
)

const ContextProvider: React.FC<Props> = ({ children }) => {
  const initialStoreState = {
    client,
    added: false,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    isCartOpen: false
  }

  const [store, updateStore] = useState(initialStoreState)
  const [isCartOpen, setCartOpen] = useState(false)
  let isRemoved = false

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const isBrowser = typeof window !== 'undefined'
      const existingCheckoutID: any | null = isBrowser
        ? localStorage.getItem('shopify_checkout_id')
        : null

      // Needs correct typings
      const setCheckoutInState = (checkout: ShopifyBuy.CheckoutResource) => {
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id)
        }

        updateStore((prevState: any) => {
          return { ...prevState, checkout }
        })
      }

      const createNewCheckout = () => store.client.checkout.create()
      const fetchCheckout = (id: string) => store.client.checkout.fetch(id)

      if (existingCheckoutID) {
        try {
          const checkout = await fetchCheckout(existingCheckoutID)
          // Make sure this cart hasn’t already been purchased.
          if (!isRemoved && !checkout.completedAt) {
            setCheckoutInState(checkout)
            return
          }
        } catch (e) {
          localStorage.setItem('shopify_checkout_id', '')
        }
      }

      const newCheckout = await createNewCheckout()
      if (!isRemoved) {
        setCheckoutInState(newCheckout)
      }
    }

    initializeCheckout()
  }, [store.client.checkout])

  useEffect(
    () => () => {
      isRemoved = true
    },
    []
  )

  return (
    <Context.Provider
      value={{
        isCartOpen,
        setCartOpen,
        store,
        addVariantToCart: (variantId, quantity) => {
          if (variantId === '' || !quantity) {
            console.error('Both a size and quantity are required.')
            return
          }

          updateStore(prevState => {
            return { ...prevState, adding: true, added: false }
          })

          const { checkout, client } = store

          const checkoutId = checkout.id
          const lineItemsToUpdate = [
            { variantId, quantity: parseInt(quantity, 10) }
          ]

          return client.checkout
            .addLineItems(checkoutId, lineItemsToUpdate)
            .then(checkout => {
              updateStore(prevState => {
                return { ...prevState, checkout, adding: false, added: true }
              })
              setCartOpen(true)
            })
        },
        removeLineItem: (client, checkoutID, lineItemID) => {
          return client.checkout
            .removeLineItems(checkoutID, [lineItemID])
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res }
              })
            })
        },
        updateLineItem: (client, checkoutID, lineItemID, quantity) => {
          const lineItemsToUpdate = [
            { id: lineItemID, quantity: parseInt(quantity, 10) }
          ]

          return client.checkout
            .updateLineItems(checkoutID, lineItemsToUpdate)
            .then(res => {
              updateStore(prevState => {
                return { ...prevState, checkout: res }
              })
            })
        }
      }}
    >
      {children}
    </Context.Provider>
  )
}
export default ContextProvider
