import React from 'react'
import { Link } from 'react-router-dom'
import "./header.styles.scss"
import { auth } from '../../firebase/Firebase.config'
function HeaderComponent({currentUser}) {
    return (
        <div className=" header " >
            <Link className="logo-container" to="/" >
              
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >
                  SHOP
                </Link>
                <Link className="option" to="/shop">
                 CONTACT
                </Link>
                {
                    currentUser?
                    <div className="option" onClick={()=>auth.signOut()} > Sign Out </div>:
                    <Link className="option" to="/signin" >Sign In</Link>
                }
               

            </div>
        </div>
    )
}

export default HeaderComponent
