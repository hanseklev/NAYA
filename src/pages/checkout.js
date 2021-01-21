import React from 'react'
import CheckoutContainer from '../components/Checkout/checkout-container'
import ShopLayout from '../components/layouts/shopLayout'

const CheckoutPage = () => {

    return (
        <ShopLayout title="Kassen">
            <CheckoutContainer/>
        </ShopLayout>
    )
}

export default CheckoutPage