import React from 'react'
import "./custombutton.scss"
function CustomButton({children,...otherprops}) {
    console.log(children);
    console.log(otherprops);
    // Sign in is the prop that is coming from 
    // submit is the prop coming from ...otherprops 
    return (
        <div className="custom-button" {...otherprops} >
            {children}
        </div>
    )
}

export default CustomButton
