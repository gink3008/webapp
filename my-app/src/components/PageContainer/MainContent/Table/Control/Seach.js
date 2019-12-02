import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputAmount"
                            placeholder="Nhap tu khoa ...." />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary" type="button">
                                <span className="fa fa-search mr-5"></span>Tim
                        </button>
                        </span>
                    </div>
                </div>
            
        );
    }

}

export default Search;
