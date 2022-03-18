import React, { Component } from 'react';
import axios from 'axios';

class Classcomponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            mytext : '아직디비..',
            mytextjson : ''
        }

    }

    componentDidMount = async () => {
        const gettext = await axios.get('/getsend')
        const getjson = await axios.get('/getsend/getjson')
        
        this.setState({ mytext : gettext.data})
        this.setState({ mytextjson : getjson.data.url})
    }

    render() {
        return (
            <div>
                <h3>나는 클래스형컴포넌트</h3>
                <p>componentDidMount 함수에 의해 해당컴포넌트가 새로고침이 되는거</p>
                {this.state.mytext}
            </div>
        );
    }
}

export default Classcomponent;