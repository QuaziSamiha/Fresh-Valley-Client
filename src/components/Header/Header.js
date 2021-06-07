import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='fixed-top'>
            <nav className='navbar navbar-expand-md navbar-light bg-light'>
                <div className="container">
                    {/* <img className='navbar-brand logo' src={Logo} alt="" /> */}
                    <h3 className='navbar-brand logo'>FRESH VALLEY</h3>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <div className='navbar-nav'>
                            <Link className='nav-link m-2' to="/home">Home</Link>
                            <Link className='nav-link m-2' to="/orders">Orders</Link>
                            <Link className='nav-link m-2' to="/admin">Admin</Link>
                            <Link to='/login'><button className='btn btn-info px-4 m-2'>Login</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;