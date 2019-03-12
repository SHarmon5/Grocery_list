import React from 'react';
import Grocery from "./Grocery";


const List = ({items, name, handleClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {items.map( item => <Grocery key={item.id} {...item} handleClick={handleClick} />)}
      {/* <div><p>Edit Item</p><button onClick={this.edit}>Edit</button></div> */}
    </ul>
  </div>
)

export default List;