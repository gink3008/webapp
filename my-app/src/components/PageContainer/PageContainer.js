import React, { Component } from 'react';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import MainContent from './MainContent/MainContent'
class PageContainer extends Component {
    render() {
        return (
            <div className="page-container">
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

export default PageContainer;
