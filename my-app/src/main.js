import React,{Component} from 'react';
import Header from './components/MainHeader/Header';
import MenuSlideBar from './components/MainMenuSlideBar/MenuSlildeBar';
import PageContainer from './components/PageContainer/PageContainer'
class System extends Component {
    render(){
        return(
            <div className="page-wrapper">
                {/* HEADER MOBILE */}
                <Header/>
                {/* END HEADER MOBILE */}
                {/* MENU SIDEBAR */}
                <MenuSlideBar/>
                {/* END MENU SIDEBAR */}

                {/* PAGE CONTAINER */}
                <PageContainer/>
                {/* END PAGE CONTAINER*/ }
            </div>
        )
    };

    
}

export default System;
