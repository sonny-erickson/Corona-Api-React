import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">CORO</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <NavLink to="/world" className="nav-link" activeClassName="active">World</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/country" className="nav-link" activeClassName="active">By country</NavLink>
                        </li>
                    </ul>

                </div>
            </header>
        )
    }
}
