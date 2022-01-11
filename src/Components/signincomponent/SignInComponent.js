import React, { Component } from 'react'
import "./Signin.scss"
import FormInput from '../form-input/FormInput'
import CustomButton from '../custombutton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/Firebase.config'
export class SignInComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: " ",
            password: " "
        }
        //    state are to be redefined here
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: " ", password: "" })
        } catch (error) {
            console.log(error);
        }

    }
    handleChange = e => {
        const { value, name } = e.target
        // if value is emial it is going for email or password
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className=" sign-in" >
                <h2>I already  have a account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        handleChange={this.handleChange}
                        name="email"
                        label="email"
                        value={this.state.email}
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                        label="password" />
                    <div className="buttons" >
                        <CustomButton onClick={this.handleSubmit} type="submit">Sign In</CustomButton>
                        {" "}
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin >Google Sign In</CustomButton>
                        {" "}
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInComponent
