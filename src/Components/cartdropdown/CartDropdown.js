import React from 'react'
import CustomButton from '../custombutton/CustomButton'
import "./cartdropdown.scss"
function CartDropdown() {
    return (
        <div className="cart-dropdown" >
            <div className="cart-items" >
                <CustomButton  >Go to checkout</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown
