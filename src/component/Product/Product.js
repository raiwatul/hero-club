import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props.product);
    const { name, role, age, country, salary, img } = props.product;
    return (
        <div >
            <div class="col">
                <div class="card h-100 bg-secondary">
                    <img src={img} class="card-img-top image rounded mx-auto d-block" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-white fw-bold">Name : {name}</h5>
                        <p class="card-text text-white fw-bold"> Role : {role}</p>
                        <p class="card-text text-white fw-bold"> Age : {age}</p>
                        <p class="card-text text-white fw-bold"> Country : {country}</p>
                        <p class="card-text text-white fw-bold">Salary : {salary}</p>

                    </div>
                    <button onClick={() => {
                        props.addToCart(props.product);
                    }} className="btn btn-success p-2">Add to cart  </button>
                </div>
            </div>
        </div>
    );
};

export default Product;