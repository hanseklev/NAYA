export const formatCart = data => {
  const rawProducts = data.addToCart.cart.contents.nodes

  let formattedCart = {}
  formattedCart.products = []

  let totalProductsCount = 0

  for (let i = 0; i < rawProducts.length; i++) {
    const rawProduct = rawProducts[i].product
    const product = {}
    // const total = rawProducts[i].total

    product.productId = rawProduct.node?.databaseId
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
  formattedCart.totalProductsPrice = data.addToCart.cart.total

  return formattedCart
}
