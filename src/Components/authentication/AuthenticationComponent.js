import React from 'react'
import SignInComponent from '../signincomponent/SignInComponent'
import Signup from '../signupcomponent/Signup'
import "./authentication.scss"
function AuthenticationComponent() {
    return (
        <div className="sign-in-and-sign-up" >
            <SignInComponent />
            <Signup />
        </div>
    )
}

export default AuthenticationComponent
