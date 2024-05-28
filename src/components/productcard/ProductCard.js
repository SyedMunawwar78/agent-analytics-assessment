import React from 'react'
import { Link } from 'react-router-dom';
import "./product.css"

function ProductCard({ product }) {
    return (
        <div className='grid-item' key={product.id}>
            <div className="card-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="card-details">
                <h2>{`${product.title.slice(0, 20)}...`}</h2>
                <p className="price">
                    <span className="current-price">₹{product.price}</span>
                </p>
                <p>{`${product.description.slice(0, 40)}...`}</p>
                <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
        </div>
    )
}

export default ProductCard