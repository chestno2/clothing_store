import React from 'react'
import CustomButton from '../custombutton/CustomButton'
import { connect } from 'react-redux'
import "./cartdropdown.scss"
import CartItems from '../cartitems/CartItems'
import { selectCartItems } from '../../redux/Cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router'
import { toggleCartHidden } from '../../redux/Cart/cartActions'
import { selectCurrentUser } from '../../redux/User/user.selector'
function CartDropdown({ cartItems, history, dispatch, currentUser }) {
    return (
        <div className="cart-dropdown" >
            <div className="cart-items" >
                {
                    cartItems.length ? (
                        cartItems.map(cartitem => <CartItems key={cartitem.id}
                            item={cartitem}
                        />)
                    ) : (<span className="empty-message">No Item added to cart</span>)}
                {currentUser && (<CustomButton
                    onClick={() => {
                        history.push("/checkout")
                        dispatch(toggleCartHidden())
                    }}>Go to checkout</CustomButton>
                )}
            </div>
        </div>
        //shortt hand to write mapstateto dispatch
    )
}

const mapStateToprops = createStructuredSelector({
    //new way of destructuring we are getting all the cartitems fronm here
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
    //selector ke same cheezz
    //cartItems state of redux


})

export default withRouter(connect(mapStateToprops)(CartDropdown))
//declaring matters