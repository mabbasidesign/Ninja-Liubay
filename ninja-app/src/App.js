import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './addNinja';

class App extends Component {

 state = {
  ninjas: [
    { id:1, name:"Ryan", age:30, belt:"Blak" },
    { id:2, name:"Jorj", age:25, belt:"Beown" },
    { id:3, name:"David", age:34, belt:"Pink" },
  ]
  }

  handleDelete = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({ ninjas });
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas });
  }
  
  render() {
    return (
      <div>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.handleDelete} />
        <AddNinja addNinja={this.addNinja}  />
      </div>
    );
  }
}

export default App;
