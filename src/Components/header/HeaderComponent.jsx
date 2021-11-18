import React from 'react'
import { Link } from 'react-router-dom'
import "./header.styles.scss"
import { auth } from '../../firebase/Firebase.config'
import { connect } from "react-redux"
import Carticon from '../Carticoncomponent/Carticon'


function HeaderComponent({ currentUser }) {
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
        </div>
    )
}
// it allows to access root reducer which is an object which points to different reducer 
//it is a function that allows us to access the reducer or state
const mapStateToProps = (state) => ({
    //property:value is  
    currentUser: state.user.currentUser

    //   rootreduce=>userReducer=>CurrentUSER  
})

export default connect(mapStateToProps)(HeaderComponent)
