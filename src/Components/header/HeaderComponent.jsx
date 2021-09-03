import React from 'react'
import { Link } from 'react-router-dom'
import "./header.styles.scss"
import { auth } from '../../firebase/Firebase.config'
import { connect } from 'react-redux'
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
// it allows to access root reducer which is an object which points to different reducer 

const mapStateToProps = (state)=>({
  currentUser:state.user.currentUser
//   rootreduce=>userReducer=>CurrentUSER  
})

export default connect(mapStateToProps)(HeaderComponent)
