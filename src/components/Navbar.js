import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Spark Bank</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AllCustomers">All</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/TransferMoney">Transfer</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/TransactionHistory">History</Link>
                    </li>


                    <Outlet />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar