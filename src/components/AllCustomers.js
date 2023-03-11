import React , {useState, useEffect} from 'react'

export default function AllCustomers() {

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
    return (
        <div className='container mt-2 pt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Account Number</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allcustomer.map((c, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{c.customer_id}</th>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.acc_no}</td>
                                    <td>{c.balance}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
