export const formatCart = cart => {
  console.log(cart);
  const rawProducts = cart.contents.nodes

  let formattedCart = {}
  formattedCart.products = []

  let totalProductsCount = 0

  for (let i = 0; i < rawProducts.length; i++) {
    const rawProduct = rawProducts[i].product
    const product = {}
    // const total = rawProducts[i].total

    product.productId = rawProduct.node?.databaseId
    product.cartKey = rawProducts[i].key;
    product.name = rawProduct?.node?.name
    product.slug = rawProduct?.node?.slug
    product.image = rawProduct?.node?.image

    product.price = rawProduct.node?.price
    product.quantity = rawProducts[i].quantity
    product.totalPrice = rawProducts[i].total

    totalProductsCount += rawProducts[i].quantity

    formattedCart.products.push(product)
  }

  formattedCart.totalProductsCount = totalProductsCount
  formattedCart.totalProductsPrice = cart.total

  return formattedCart
}

export const getUpdatedCartItems = (items, newQty, key) => {
  const updatedItems = []

  items.map(item => {
    if (item.cartKey === key){
      updatedItems.push({
        key: item.cartKey,
        quantity: parseInt(newQty)
      })
    }
    else {
      updatedItems.push({
        key: item.cartKey,
        quantity: item.quantity
      })
    }
    return null
  })
  return updatedItems
}
