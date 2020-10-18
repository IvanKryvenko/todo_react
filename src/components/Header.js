import React from 'react';
import Clock from './Clock';
import '../styles/App.css';

function Header(props) {
    return (
        <header>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-2">

                </div>
                <div className="header-text col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                    <h2>
                        ToDo-List on React
                    </h2>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 clock">
                    <Clock />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-2">

                </div>
            </div>
        </header>
    );
}

export default Header;