// import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { UserContext } from '../../App';

const Product = ({ product }) => {

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const handleBuyNow = (id) => {
    //     // const orderedProduct = { ...loggedInUser, ...product };
    //     // console.log(orderedProduct);
    //     // console.log(id);
    // }

    return (
        <div className='col-lg-4'>
            <div className="card m-4" style={{ width: "18rem" }}>
                <img src={product.imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Price: {product.price}</p>
                    <Link to={`/orders/${product._id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;

// onClick={() => handleBuyNow(product._id)} 