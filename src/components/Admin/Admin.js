import React, { useState } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageUrl: imageURL
        }

        const url = `http://localhost:5000/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response'))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '58e386288bcbac2021fc68ad422fac3a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='admin-section'>
            <div className='admin-sidebar'>
                <small>Manage Product</small> <br />
                <small>Add Product</small> <br />
                <small>Edit Product</small> <br />
            </div>
            <div className='product'>
                <h4>Add Product</h4>
                <div className='border border-1 rounded-3 m-4 p-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Product Name</label> <br />
                        <input className='form-control' type="text" name="name" {...register("name")} /> <br />
                        <label>Add Price</label> <br />
                        <input className='form-control' type="text" name="price" {...register("price")} /> <br />
                        <label>Add Photo</label> <br />
                        <input className='form-control' type="file" name="photo" onChange={handleImageUpload} /> <br />
                        <input className='form-control bg-info' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;
