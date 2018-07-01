import React, { Component } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class Page4 extends Component {

    constructor(props){
        super(props);

        this.state = {user: ''};
    } //end constructor

    handleChange = (event) => {
        this.setState({user: event.target.value});
    }//end handleChange

    handleNext = () => {
        console.log('click');
        const action = {type: 'ADD_INPUT', var: 'comments', payload: this.state.user};
        this.props.dispatch(action);

        this.sendToServer(this.props.reduxStore.feedback);
        
    } // end handleNext

    sendToServer = (feedback) => {
        axios.post('/feedback', feedback)
            .then( (response) => {
                console.log('Updated DB', response.data);
                        
            }).catch( (error) => {
                console.log('Error posting to DB');
                        
            });
    } //end send to server

  render() {
    return (

        <div>
            <HeaderPage />
            <br/>
            <div>
                <p>4 of 4 pages</p>
                <br/>
                <p>Any Comments you want to leave?</p>
                <input type="text" placeholder="" value={this.state.user} onChange={this.handleChange}/>
                <br/>
                <Link to="/5">
                <button onClick={this.handleNext}>Submit</button>
                </Link>
            </div>
        </div>
        
    );
  }
}

export default connect(mapReduxToProps)(Page4);