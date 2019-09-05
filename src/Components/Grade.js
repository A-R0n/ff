import React, { Component } from 'react';
import './Grade.css';

class Grade extends Component {
    constructor(props){
        super(props);

        this.state = {
            grade: '98.0'
        }
    }
    render() {
        return (
            <div className='Grade'>
               Grade:
               <h4>{this.state.grade} </h4>
            </div>
        );
    }
}

export default Grade;