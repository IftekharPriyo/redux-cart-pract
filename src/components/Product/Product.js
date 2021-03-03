import React from 'react';

const Product = (props) => {
    const {addToCart} = props;
    const {name, id} = props.product;
    return (
        <div style={{border: '1px solid grey', padding: '20px', margin : '10px'}}>
            <h5>{name}</h5>
            <button onClick={()=>addToCart(id, name)}>Add to Cart</button>
        </div>
    );
};

export default Product;