import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransactionGraph from '../Graph/TransactionGraph';
import { Link } from 'react-router-dom';


export default function SingleCustomer() {
    const { id } = useParams();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://mohamednabil1213.github.io/jsonServer/db.json')
            .then((res) => res.json())
            .then((data) => setCustomers(data.customers));
    }, []);

    return (
        <div className="container">
            <div className="flex justify-center">
                {customers.filter((customer) => customer.id == parseInt(id)).map((customer) => {
                    return <>


                        <Link to={'/'} className='position-absolute top-2 start-1 btn btn-outline-danger'>
                            <i className='close fa-solid fa-close'></i>
                        </Link>
                        <div key={customer.id} className="text-center p-0 m-0">
                            <h2 className="text-2xl font-bold mb-2 text-white border-white ">ID: {customer.id}</h2>
                            <h2 className="text-2xl font-bold mb-2 text-white">NAME: {customer.name}</h2>
                        </div>
                    </>
                })}
            </div>
            <div className="mt-8">
                <TransactionGraph customerId={id} />
            </div>
        </div>
    );
}
