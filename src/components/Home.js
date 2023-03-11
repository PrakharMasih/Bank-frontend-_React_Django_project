import React from 'react'
import '../style/stylehome.css'
import bank from '../assets/bank.png'
import history from '../assets/history.jpg'
import money from '../assets/money.webp'
import customer from '../assets/Customers.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='home-body'>
                <div className="text">
                    <button data-text="Awesome" className="button">
                        <span className="actual-text"><h1>&nbsp;Spark.Bank&nbsp;</h1></span>
                        <span className="hover-text" aria-hidden="true"><h1>&nbsp;Spark.Bank&nbsp;</h1></span>
                    </button>
                    <h5 className='semi-text' >Transfer your money safely with us &#128521;</h5>
                </div>
                <img src={bank} alt="img" className='bankimg' />
            </div>
            <div className="services">
                <header className='service-head'>Services</header>
                <div className="boxes">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={customer} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><b>All Customers</b></h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/AllCustomers" className="btn btn-primary">Customers</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={money} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><b>Transfer Funds</b></h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/TransferMoney" className="btn btn-primary">Transfer Funds</Link>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={history} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><b>Transaction History</b> </h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/TransactionHistory" className="btn btn-primary">History</Link>
                        </div>
                    </div>
                </div>
                <div className="credit">
                    <h6>&#169;prakharmasih</h6>
                </div>
            </div>

        </>
    )
}
