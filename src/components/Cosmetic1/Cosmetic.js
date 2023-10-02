import React from 'react';
import './Cosmetic.css';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../Utilities/fakedb';

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    const addToCart = (id)=>{
        addToDb(id);
    }

    const removeFromCart=id=>{
        removeFromDb(id);
    }
    const deleteFromCart=id=>{
        deleteShoppingCart();
    }

    const addToCartWithParam=()=>{addToCart(id)}
    return (
        <div className="product">
            <h2>Buy This:{name} </h2>
            <p>Only for:${price}</p>
            <p>Id Bo: <small>{id}</small></p>
            <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
            <button onClick={()=>deleteFromCart(id)}>Delete</button>
        </div>
    );
};

export default Cosmetic;