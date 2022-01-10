import React from 'react'
import "./custombutton.scss"
function CustomButton({ children, isGoogleSignin, inverted, ...otherprops }) {
    // console.log(children);
    // console.log(otherprops);
    // Sign in is the prop that is coming from 
    // submit is the prop coming from ...   
    return (
        // <button
        //     className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''
        //         } custom-button`}
        //     {...otherprops}
        // >
        //     {children}
        // </button>
        <button
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''
                } custom-button`}
            {...otherprops}
        >
            {children}
        </button>
    )
}

export default CustomButton
