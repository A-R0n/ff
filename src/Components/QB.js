import React, { Component } from 'react';

class QB extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: 'Baker'
        }
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

export default QB;