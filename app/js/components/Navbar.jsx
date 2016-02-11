import React from 'react';
import appConfig from '../config/appConfig';

export default class Navbar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <nav className="green">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">{appConfig.leagueName}</a>
                </div>
            </nav>
        );
    }
}
