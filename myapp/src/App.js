import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
    {name: 'Ryu', age: 30,  belt: 'blacky', id: 1 },
    {name: 'bob', age: 20,  belt: 'blue', id: 2 },
    {name: 'Rnish', age: 33,  belt: 'red', id: 3 }
  ]}
  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja= (id) =>{
    let ninjas = this.state.ninjas.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      ninjas :ninjas
    })
  }
  render() {
    return (
      <div className="App">
      <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas} />
      <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;