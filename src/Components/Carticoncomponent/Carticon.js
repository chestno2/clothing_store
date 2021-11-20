
import React from 'react'
import { ReactComponent as Shoppingbag } from "../../assets/shopping-bag.svg"
import "./carticon.scss"
import { connect } from "react-redux"
import { toggleCartHidden } from '../../redux/Cart/cartActions'
import { selectCartItemscount } from '../../redux/Cart/cart.selector'
import { createStructuredSelector } from 'reselect'

function Carticon({ toggleCartHidden, itemCount }) {
    return (
        <div className=" cart-icon" onClick={toggleCartHidden} >
            <Shoppingbag className="shopping-icon" />
            <span className="item-count" >{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    //property    :  value
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemscount
})



export default connect(mapStateToProps, mapDispatchToProps)(Carticon)
