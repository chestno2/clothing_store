
import React from 'react'
import { ReactComponent as Shoppingbag } from "../../assets/shopping-bag.svg"
import "./carticon.scss"
import { connect } from "react-redux"
import { toggleCartHidden } from '../../redux/Cart/cartActions'

function Carticon({ toggleCartHidden }) {
    return (
        <div className=" cart-icon" onClick={toggleCartHidden} >
            <Shoppingbag className="shopping-icon" />
            <span className="item-count" >1</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    //property    :  value
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(Carticon)
