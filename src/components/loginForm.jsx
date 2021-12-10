import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import {login} from '../services/authService'

class LoginForm extends Form {
    state = {
        data: {username: '' , password:''},
        errors: {}
    }

    schema = {
        //https://www.npmjs.com/package/joi/v/14.0.4
        
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = async () => {
        const { data } = this.state;
        await login(data.username,data.password)
    }
    render() { 
        const { data, errors } = this.state;

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
               {this.renderInput('username','username')}
               {this.renderInput('password','password','password')}
               {this.renderButton("Login")}
            </form>
        </div>
        );
    }
}
 
export default LoginForm;