import React from 'react';

import './Product.css';
export default function Product(props){
    const {product, onAdd}=props;
    return(
        <div className="product">
            <div className="row">
                <i  className="btn default" onClick={() => onAdd(product)}>
                     
                    <div className="product__name">
                    <img className="image" src={product.image} alt={product.name}></img> 
                        <p className="product__price">
                            <strong>{product.price}</strong>
                        </p>
                        <p>{product.name}</p>
                    </div>                        
                </i> 
            </div>
        </div>
    )
} 