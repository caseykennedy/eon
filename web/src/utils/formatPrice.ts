const formatPrice = (price: number, locales: string, currency: string) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: `${currency}`
  }).format(price)
}

export default formatPrice
