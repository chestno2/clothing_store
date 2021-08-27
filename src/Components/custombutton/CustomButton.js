import React from 'react'
import "./custombutton.scss"
function CustomButton({children,isGoogleSignin,...otherprops}) {
    console.log(children);
    console.log(otherprops);
    // Sign in is the prop that is coming from 
    // submit is the prop coming from ...   
    return (
        <div className={`${isGoogleSignin?"google-sign-in":" "} custom-button`} {...otherprops} >
            {children}
        </div>
    )
}

export default CustomButton
