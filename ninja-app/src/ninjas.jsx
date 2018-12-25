import React, { Component } from 'react';

class Ninjas extends Component {

    render() {

    const ninjaList = this.props.ninjas.map(ninja => {
        return(
            <div key={ninja.id} className="ninja" >
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => this.props.deleteNinja(ninja.id)}>Delete</button>
            </div>
        )
    });

        return ( 
            <div>
                {ninjaList}
            </div>
         );
    }
}

export default Ninjas;