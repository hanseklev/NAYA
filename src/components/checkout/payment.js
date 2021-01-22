import React from 'react'

const PaymentOptions = () => {

    return (
        <fieldset>
            <input type="radio" name="payment" id="vipps"/>
            <label htmlFor="vipps">Vipps</label>
            <input type="radio" name="payment" id="klarna"/>
            <label htmlFor="klarna">klarna</label>
            <input type="radio" name="payment" id="paypal"/>
            <label htmlFor="paypal">paypal</label>
        </fieldset>
    )
}

export default PaymentOptions