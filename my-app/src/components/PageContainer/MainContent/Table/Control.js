import React, { Component } from 'react';
import Search from './Control/Seach';
import Sort from './Control/Sort';

class Control extends Component {
    render() {
        return (
            <div className="row mt-15">
                {/* search */}
                <Search/>
                {/* sort */}
                <Sort/>
            </div>

        );
    }

}

export default Control;
