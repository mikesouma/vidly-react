import React, { Component } from 'react';
import Input from './common/'

class LoginForm extends React.Component {
    state = {
        account: {username: '' , password:''}
    }

    handleChange = ({ currenTarget: input }) =>{
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    };

    handleSubmit = e => {
        e.preventDefault();
        //Call the server
        console.log("Submitted");
    }
    render() { 
        const { account } = this.state;

        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <Input 
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChange}
                />
                  <Input 
                    name="password"
                    value={account.password}
                    label="Password"
                    onChange={this.handleChange}
                />
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        );
    }
}
 
export default LoginForm;