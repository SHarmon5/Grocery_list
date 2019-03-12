import React from "react";

const Grocery = ({ id, name, purchased, handleClick }) => (
  <li
    style={ purchased ? { ...styles.purchased } : { ...styles.grocery } }
    onClick={() => handleClick(id)}
  >
    { name }
  </li>
)

const styles = {
  grocery: { cursor: "pointer", },
  purchased: { color: "grey", textDecoration: "line-through", },
}

export default Grocery;
