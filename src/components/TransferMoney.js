import React, { useEffect, useState } from 'react'
import '../style/styletransfermoney.css'

export default function TransferMoney() {

  const [updatebalance, setUpdatebalance] = useState('');
  const [key, setKey] = useState(0);

  const [allcustomer, setAllcustomer] = useState([])

  useEffect(() => {
    const fetchapi = async () => {
      const data = await fetch('http://127.0.0.1:8000/api/v1/customer/')
      const res = await data.json();
      // console.log(res);
      setAllcustomer(res);
    }
    fetchapi();
  }, [])

  const handlesubmit = (e) => {
    e.preventDefault();

    const arr = allcustomer[key];
    const updatedbalance = Number(updatebalance) + arr.balance;

    const info = {
      customer_id: Number(key) + 1,
      name: arr.name,
      email: arr.email,
      acc_no: arr.acc_no,
      balance: updatedbalance
    }

    // console.log(info.customer_id)
    // console.log(info);
    fetch(`http://127.0.0.1:8000/api/v1/customer/${info.customer_id}/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })


    fetch(`http://127.0.0.1:8000/api/v1/transactionhistory/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })
    setUpdatebalance('')
    alert("Successfully Submited!");
    

  }

  // const data = allcustomer
  // console.log(data)


  return (
    <>
      <div className="box">
        <form onSubmit={handlesubmit} >
          <h2>Transfer Money</h2>
          <select name="customers" id="customers" placeholder='To' onChange={e => setKey(e.target.value)} >
            {allcustomer.map((curr, i) => {
              return (
                <option key={i} id='option1' value={i} >{curr.name}</option>
              )
            })}
          </select>

          <input type="number" value={updatebalance} onChange={e => setUpdatebalance(e.target.value)} id='amt' className='amount' placeholder='Enter Amount' required min="0" max="200000" />
          <input type="submit" className='submitBtn' value="submit" />
        </form>

      </div>
    </>
  )
}
