import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Leader.css"

const Leader = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("./leaders.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className="leader-container">
            <div className="row row-cols-1 row-cols-md-3 g-4 ">


                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart">
                <h1>Leader Count</h1>
                <p>Total Leader</p>
                <p>Charge</p>
            </div>
        </div>
    );
};

export default Leader;