import React, { useEffect, useState } from 'react';
import useFetch from '../Fetch';
const Products = () => {
    const { data: products, loading } = useFetch("http://localhost:2000/products");

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1 className='text-center mb-3'>Products Component</h1>
            <hr />
            <div className="row mt-3">
                {products.map((product) => (
                    <div className="col-12 col-md-4" key={product.id}>
                        <div className="card" style={{ minHeight: '330px' }}>
                            <img src={product.imgUrl} className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{product.name}</h5>
                                <p className="card-text">{product.price}$</p>
                                <p className="card-text">
                                    {product.quantity === 0 ? (
                                        <p className='bg-danger p-2 text-light rounded text-canter'>out of stock</p>
                                    ) : (
                                        <p>{product.quantity}</p>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;