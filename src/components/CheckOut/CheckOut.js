import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './CheckOut.css';

const CheckOut = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orderedProduct?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [])

    return (
        <div className='text-center'>
            <h4>Welcome {loggedInUser.userName}!!!</h4>
            <p>You Have Ordered:</p>
            <div>
                {
                    orders.map(order => <div className='ordered-product'>
                        <h5>Product Name: {order.name}</h5>
                        <p>Price: {order.price}</p>
                        <img src={order.imageUrl} alt="" /> <br />
                        <button className='btn btn-success p-2 m-4'>Place Order</button>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CheckOut;