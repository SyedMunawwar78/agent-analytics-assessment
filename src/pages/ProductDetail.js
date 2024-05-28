import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/productActions';
import { useParams } from 'react-router-dom';
import Button from '../components/button/Button';
import Loader from '../components/loader/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="container">
      <div className="product-image">
        <img src={product.image} alt="OnePlus Buds 3" />
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="rating">
          <span>{product.rating.rate}</span> <span className='star'>★</span> <span>| {product.rating.count} Ratings</span>
        </div>
        <div className="price">
          <span className="current-price">₹5499</span>
        </div>
        <p><span style={{fontWeight : "bold"}}>Category</span> : {product.category}</p>
        <div className="options">
          <Button className={"active"} title={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
