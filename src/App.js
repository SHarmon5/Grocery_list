import React, { Component } from 'react';
import List from './List';

class App extends Component {
  state = {
   groceryItems: [
     { id: 1, name: "milk", purchased: false, },
     { id: 2, name: "bread", purchased: false, },
     { id: 3, name: "butter", purchased: false, },
   ]
    } 
    
    render() {
      const { groceryItems, } = this.state;

      return (
        <List name="Grocery List" items={groceryItems} />
        );
    }



    );
  }
}

export default App;
