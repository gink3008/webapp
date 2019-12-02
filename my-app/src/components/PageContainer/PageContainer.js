import React, { Component } from 'react';
import Background from './bg-01.jpg'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import MainContent from './MainContent/MainContent'
class Login extends Component {
    ColorBlock = () => {
        let style = {
            backgroundImage: `url(${Background})`
        }
        return style;
    };
    render() {
        return (
            <div class="page-container">
                {/* HEADER DESKTOP */}
                <HeaderDesktop/>
                {/* HEADER DESKTOP */}
                {/* MAIN CONTENT */}
                <MainContent/>
                {/* END MAIN CONTENT */}
            </div>
        )
    };
}

export default Login;
