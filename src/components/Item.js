import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, addToCart] = useState(false);
  const liClass = inCart ? "in-cart" : ""

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart(!inCart)}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;