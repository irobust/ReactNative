import React, { Component } from 'react';
import Demo from './Demo';

class Parent extends Component {
    state = {
        generatedId: 1
    }

    reset = () => {
        this.setState((prevState) => {
            return {generatedId : prevState.generatedId + 1}
        });
    }

    render() {
        return (
            <Demo key={this.state.generatedId} 
                 currentId={this.state.generatedId}
                 reset={this.reset}/>
        );
    }
}

export default Parent;