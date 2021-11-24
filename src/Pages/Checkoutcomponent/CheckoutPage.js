import React from 'react'
import "./checkoutpage.scss"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selector'
import CheckoutItems from '../../Components/checkoutitemcomponent/CheckoutItems'
import Stripebutton from '../../Components/stripe-button/Stripebutton'

function CheckoutPage({ cartItems, total }) {
    console.log(total);
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem =>
                <CheckoutItems key={cartItem.id} cartItem={cartItem} />
            )}

            <div className="total" >
                <span>TOTAL:${total}</span>
                <div className='test-warning'>
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                </div>
                <Stripebutton price={total} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
