import React from 'react';

const List = ({items, list}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {items.map( item => <li key={item.id}>{item.name}</li>)}
    </ul>
  </div>
)

export default List;