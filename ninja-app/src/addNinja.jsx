import React, { Component } from 'react';

class AddNinja extends Component {

state = {
    name: null,
    email: null,
    age: null
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNinja(this.state)
}

onChange = (e) => {
    this.setState({ 
        [e.target.id]: e.target.value
     })
}

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.onChange}/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={this.onChange}/>

                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" onChange={this.onChange}/>

                    <button>Submit</button>
                </form>
            </div>
         );
    }
}

export default AddNinja;