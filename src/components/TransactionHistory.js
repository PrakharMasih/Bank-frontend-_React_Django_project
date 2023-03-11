import React , {useState, useEffect} from 'react'

export default function TransactionHistory() {

    const [allhistory, setAllhistory] = useState([])

    useEffect(() => {
        const fetchapi = async () => {
            const data = await fetch('http://127.0.0.1:8000/api/v1/transactionhistory/')
            const res = await data.json();
            // console.log(res);
            setAllhistory(res);
        }
        fetchapi();
    }, [])

    return (
        <div className='container mt-4 pt-4'>
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
                        allhistory.map((c) => {
                            return (
                            <tr key={c.Transaction_id} >
                                <th scope="row">{c.Transaction_id}</th>
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
