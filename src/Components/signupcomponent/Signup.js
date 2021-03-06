import React, { Component } from 'react'
import { auth, createProfileDocument } from '../../firebase/Firebase.config';
import CustomButton from '../custombutton/CustomButton';
import FormInput from '../form-input/FormInput';

export class Signup extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up ">
                <h2 className="title">I do not have account</h2>
                <span>Sign in with your E-mail and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} >
                <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Full Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />

                    <CustomButton onClick={this.handleSubmit} type="submit" >Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup
