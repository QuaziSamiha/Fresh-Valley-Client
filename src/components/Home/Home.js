import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    return (
        <div className='all-products m-4'>
            {/* <h1>this is home...</h1> */}
            {
                products.map((product, index) => <Product key={index} product={product}></Product>)
            }
        </div>
    );
};

export default Home;

//  style={{marginTop:"300px"}}