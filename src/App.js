import React, { Component } from 'react';
import List from './List';
import GroceryForm from './GroceryForm';
import './App.css';

class App extends Component {
  state = {
   groceryItems: [
     { id: 1, name: "milk", purchased: false, },
     { id: 2, name: "bread", purchased: false, },
     { id: 3, name: "butter", purchased: false, },
    ]
  } 

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const groceryItem = { id: this.getId(), name, purchased: false, };
    this.setState({ groceryItems: [groceryItem, ...this.state.groceryItems] });
  }
    
  handleClick = (id) => {
    this.setState({
      groceryItems: this.state.groceryItems.map( groceryItem => {
        if (groceryItem.id === id) {
          return { ...groceryItem, purchased: !groceryItem.purchased, }
        }
        return groceryItem;
      })
    })
  }




  render() {
    return (
      <div className="App">
       <GroceryForm addItemFunction= {this.addItem} />
       <List name="Grocery List" items={this.state.groceryItems} handleClick={this.handleClick}/>      
      </div>
    );
  }
}

export default App;
