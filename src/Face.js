import React, { Component } from 'react';
import face from './face.JPG';

class Face extends Component {
    render() {
        return (
            <div>
                <img src={face} alt="face" width="300" height="400" />
            </div>
        )
    }
}

export default Face
