import React, { Component } from 'react';
import auth from '../services/authService';

class Logout extends React.Component {
    componentDidMount() {
        auth.Logout();
        window.location = '/';
    }
    render() { 
        return null;
    }
}
 
export default Logout;