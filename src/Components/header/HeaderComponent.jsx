import React from 'react'
import { Link } from 'react-router-dom'
import "./header.styles.scss"
import { auth } from '../../firebase/Firebase.config'
import { connect } from "react-redux"
import Carticon from '../Carticoncomponent/Carticon'
import CartDropdown from '../cartdropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/User/user.selector'
import { selectCarthidden } from '../../redux/Cart/cart.selector'


function HeaderComponent({ currentUser, hidden }) {
    console.log(currentUser);
    return (
        <div className=" header " >
            <Link className="logo-container" to="/" >
                Logo
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()} > Sign Out </div> :
                        <Link className="option" to="/signin" >Sign In</Link>
                }

                <Carticon />
            </div>
            {hidden ? null :
                <CartDropdown />}
        </div>
    )
}
// it allows to access root reducer which is an object which points to different reducer 
//it is a function that allows us to access the reducer or state
const mapStateToProps = createStructuredSelector({
    //property:value is  
    currentUser: selectCurrentUser,
    hidden: selectCarthidden
    //   rootreduce=>userReducer=>CurrentUSER  
})

export default connect(mapStateToProps)(HeaderComponent)
