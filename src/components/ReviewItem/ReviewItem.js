import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct}=props;
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-container'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <h4>{name}</h4>
                    <p>Price: <span>{price}</span></p>
                    <div className="details-flex">
                        <p><small>Shipping: {shipping}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                    </div>
                </div>
                <div className="review-btn">
                    <button onClick={()=>handleRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
          
        </div>
    );
};

export default ReviewItem;