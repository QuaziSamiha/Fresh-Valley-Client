import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className='col-lg-4 pt-5'>
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
