import { v4 } from "uuid"

export const formatCart = cart => {
  const rawProducts = cart.contents.nodes

  let formattedCart = {}
  formattedCart.products = []

  let totalProductsCount = 0

  for (let i = 0; i < rawProducts.length; i++) {
    const rawProduct = rawProducts[i].product
    const product = {}
    // const total = rawProducts[i].total

    product.productId = rawProduct.node?.databaseId
    product.cartKey = rawProducts[i].key
    product.name = rawProduct?.node?.name
    product.slug = rawProduct?.node?.slug
    product.image = rawProduct?.node?.image

    product.price = rawProduct.node?.price
    product.quantity = rawProducts[i].quantity
    product.totalPrice = rawProducts[i].total
    product.shipping = rawProducts[i].shippingTotal

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
    if (item.cartKey === key) {
      updatedItems.push({
        key: item.cartKey,
        quantity: parseInt(newQty),
      })
    } else {
      updatedItems.push({
        key: item.cartKey,
        quantity: item.quantity,
      })
    }
    return null
  })
  return updatedItems
}

export const formatCheckoutData = (order) => {
  console.log(order);
  //setcountry
  const checkoutData = {
    clientMutationId: v4(),
    billing: {
      firstName: order.firstName,
      lastName: order.lastName,
      address1: order.address,
      city: order.city,
      country: 'NO',
      postcode: order.postcode,
      email: order.email,
      phone: order.phone
    },
    shipping: {
      firstName: order.firstName,
      lastName: order.lastName,
      address1: order.address,
      city: order.city,
      country: 'NO',
      postcode: order.postcode,
      email: order.email,
      phone: order.phone
    },
    shipToDifferentAddress: false,
    paymentMethod: order.paymentMethod,
    isPaid: false,
    // customerNote: order.customerNote,
  }
  return checkoutData
}