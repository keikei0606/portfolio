import React, { Component } from 'react';
import './Face.css';
import face from './face.JPG';

class Face extends Component {
    render() {
        return (
            <div className="round">
                <img src={face} alt="face" />
                <h3> 櫻井 啓裕 (Keisuke Sakurai)</h3>
            </div>
        )
    }
}

export default Face
