import React from 'react'
import CustomButton from '../custombutton/CustomButton'
import { connect } from 'react-redux'
import "./cartdropdown.scss"
import CartItems from '../cartitems/CartItems'
import { selectCartItems } from '../../redux/Cart/cart.selector'
function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown" >
            <div className="cart-items" >
                {
                    cartItems.map(cartitem => <CartItems key={cartitem.id}
                        item={cartitem} />)
                }
                <CustomButton>Go to checkout</CustomButton>
            </div>
        </div>
    )
}

const mapStateToprops = (state) => ({
    //new way of destructuring we are getting all the cartitems fronm here
    cartItems: selectCartItems(state)

})

export default connect(mapStateToprops)(CartDropdown)
