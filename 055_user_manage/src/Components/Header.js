import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center ">
                <h1 className="display-4">Manage User by React Project</h1>
                <p className="lead">json data</p>
                <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;