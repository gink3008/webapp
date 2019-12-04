import React, { Component } from 'react';
class HeaderDesktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }
    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }
    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/target' />
    //     }
    // }
    render() {
        return (
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            {/* Search DATA */}
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            {/* END SEARCH DATA */}
                            <div className="header-button">
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