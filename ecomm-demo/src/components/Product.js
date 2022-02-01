import React from "react";

export default function product(props) {
  return (
    //horizontal card
    <div className="card card-hz">
      <div className="card-img-container card-img-hz">
        <img className="card-img" src={props.product.image} alt="peanut-butter" />
      </div>
      <div className="card-desc">
        <h3>{props.product.title}</h3>
        <p>{props.product.category}</p>
        <span className="card-price">Rs {props.product.price}</span>
        <span className="card-price-line-through">Rs {props.product.image * 2}</span>
        <div className="card-btns card-btns-hz">
          <button className="card-cart btn btn-primary btn-hz">add to cart</button>
          <button className="card-wishlist btn btn-secondary btn-hz">wishlist</button>
        </div>
      </div>
    </div>
  );
}
