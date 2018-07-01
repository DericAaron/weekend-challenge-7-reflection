import React, { Component } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class Page1 extends Component {

    constructor(props){
        super(props);

        this.state = {user: 0};
    } //end constructor

    handleChange = (event) => {
        this.setState({user: event.target.value});
    }//end handleChange

    handleNext = () => {
        console.log('click');
        const action = {type: 'ADD_INPUT', var: 'feeling', payload: this.state.user};
        this.props.dispatch(action);
    } // end handleNext

  render() {
    return (

        <div>
            <HeaderPage />
            <br/>
            <div>
                <p>1 of 4 pages</p>
                <br/>
                <p>How are you feeling today?</p>
                <input type="number" placeholder="1-5" value={this.state.user} onChange={this.handleChange}/>
                <br/>
                <Link to="/2">
                <button onClick={this.handleNext}>Next -></button>
                </Link>
            </div>
        </div>
        
    );
  }
}

export default connect(mapReduxToProps)(Page1);