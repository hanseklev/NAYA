import React, { useContext } from 'react'
import { CartContainer } from '../components/Cart/CartContainer'
import { CartItem } from '../components/Cart/CartItem'
import ShopLayout from '../components/layouts/shopLayout'
import { ProductContext } from '../context/productContext'

const CartPage = () => {
    const context = useContext(ProductContext)
    console.log(context);

    return (
        <ShopLayout>
        <CartContainer>
        {context.cartItems && 
        context.cartItems.map(item => (
            <CartItem key={item.id} item={item}/>
        ))}

        </CartContainer>
        </ShopLayout>
    )
}

export default CartPage