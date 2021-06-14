import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Orders.css';
import { UserContext } from '../../App';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedProduct, setOrderedProduct] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/orderedProduct/' + productId)
            .then(res => res.json())
            .then(data => {
                setOrderedProduct(data);
            })
    }, [productId])

    const handleCheckOut = (product, user) => {
        const orderedDetail = { ...product, ...user };
        delete orderedDetail._id

        const url = `http://localhost:5000/addOrder`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedDetail)
        })
            .then(res => console.log('server side response'))
    };

    return (
        <div className='text-center'>
            <h2> Welcome {loggedInUser.userName}!!!</h2>
            <p>Your Order Product is:</p>
            <div className='ordered-product'>
                <h4>Product Name: {orderedProduct.name}</h4>
                <p>Price: {orderedProduct.price}</p>
                <img src={orderedProduct.imageUrl} alt="" /> <br />
                <button onClick={() => handleCheckOut(orderedProduct, loggedInUser)} className='btn btn-success p-2 m-3'>Check Out</button>
            </div>
        </div>
    );
};

export default Orders;