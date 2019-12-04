import React, { Component } from 'react';
// import Search from './Control/Seach';
// import Sort from './Control/Sort';

class Control extends Component {
    render() {
        return (
            <div className="row mt-15">
                {/* search */}
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputAmount"
                            placeholder="Nhap tu khoa ...." />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-primary" >
                                <span className="fa fa-search mr-5"></span>Tim
                            </button>
                        </span>
                    </div>

                    {/* sort */}
                    <div>
                        <div className="dropdown">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"

                            >
                                Sap Xep<span className="fa caret ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <a role="button" className="sort_selected" href="/aaa">
                                        <span className="fa fa-sort-alpha-asc pr-5">
                                            Ten A-Z
                                </span>
                                    </a>
                                </li>
                                <li>
                                    <a role="button" href="/aaa">
                                        <span className="fa fa-sort-alpha-asc pr-5">
                                            Ten Z-A
                                </span>
                                    </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                    <a role="button" href="/aaa">
                                        Trang thai kich hoat
                            </a>
                                </li>
                                <li>
                                    <a role="button" href="/aaa">
                                        Trang thai an
                            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                


        );
    }

}

export default Control;
