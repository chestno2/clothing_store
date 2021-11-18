
import React from 'react'
import { ReactComponent as Shoppingbag } from "../../assets/shopping-bag.svg"
import "./carticon.scss"
function Carticon() {
    return (
        <div className=" cart-icon" >
            <Shoppingbag className="shopping-icon" />
            <span className="item-count" >1</span>
        </div>
    )
}

export default Carticon
