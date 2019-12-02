import React, { Component } from 'react';
import Background from './bg-01.jpg'
class HeaderDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/target' />
        }
    }
    render() {
        return (
            <header class="header-desktop">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="header-wrap">
                            {/* Search DATA */}
                            <form class="form-header" action="" method="POST">
                                <input class="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                <button class="au-btn--submit" type="submit">
                                    <i class="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            {/* END SEARCH DATA */}
                            <div class="header-button">
                                {/* LOGIN SUCCESS */}

                                {/* END LOGIN SUCCESS */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderDesktop;