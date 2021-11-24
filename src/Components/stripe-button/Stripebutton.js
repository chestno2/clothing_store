import React from 'react'
import StripeCheckout from "react-stripe-checkout"
function Stripebutton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JzK6wSHiuoYcAXBxDCHEGYf2IaUAs43rXPNM9ezkc44BgP7MqOxtxq73PwDIBilsoqrrbiVBgk6sWGLHH3GLrS600p2p3Z0aA"
    const onToken = token => {

        console.log(token)
        alert("Payement Succesfull")

    }
    return (
        <div>
            <StripeCheckout
                label="Pay Now"
                name="Clothing Store"
                billingAddress
                shippingAddress
                description={`Your total is ${price}`}
                amount={priceForStripe}
                token={onToken}
                stripeKey={publishableKey}

            />
        </div>
    )
}

export default Stripebutton
