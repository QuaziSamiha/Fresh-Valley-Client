import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <div className="card m-4" style={{width: "18rem"}}>
                <img src={product.imageUrl} className="card-img-top" alt="" />
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>Price: {product.price}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default Product;