// import React, { Component } from 'react';
// import Ninjas from './ninjas';

// class App extends Component {
//   render() {
//     state = {
//       ninjas: [
//         { id:1, name:"Ryan", age:30, belt:"Blak" },
//         { id:2, name:"Jorj", age:25, belt:"Beown" },
//         { id:3, name:"David", age:34, belt:"Pink" },
//       ]
//      }

//     // const {ninjas} = this.state;

//     return (
//       <div className="App">
//         <Ninjas ninjas={this.state.ninjas} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import Ninjas from './ninjas';


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
  
  render() {
    return (
      <div>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.handleDelete} />
      </div>
    );
  }
}

export default App;
