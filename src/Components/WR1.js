import React, { Component } from 'react';

class WR1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: 'Davante'
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

export default WR1;