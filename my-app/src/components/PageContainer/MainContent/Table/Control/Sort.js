import React, { Component } from 'react';
class Sort extends Component {
    render() {
        return (
         
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
                                <a role="button" className="sort_selected" >
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Ten A-Z
                                </span>
                                </a>
                            </li>
                            <li>
                                <a role="button" >
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Ten Z-A
                                </span>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li>
                                <a role="button" >
                                    Trang thai kich hoat
                            </a>
                            </li>
                            <li>
                                <a role="button" href="#">
                                    Trang thai an
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }

}

export default Sort;
