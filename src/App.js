import './App.css';
import Navbar from './components/Navbar.js'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import AllCustomers from './components/AllCustomers';
import TransferMoney from './components/TransferMoney';
import TransactionHistory from './components/TransactionHistory';

function App() {

 return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/AllCustomers' element={<AllCustomers />} />
          <Route path='/TransferMoney' element={<TransferMoney />} />
          <Route path='/TransactionHistory' element={<TransactionHistory/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
