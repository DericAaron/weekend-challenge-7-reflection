import React, { Component } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class Page5 extends Component {

    handleNext = () => {
        console.log('click');
        const action = {type: 'RESET'};
        this.props.dispatch(action);
    } // end handleNext

  render() {
    return (

        <div>
            <HeaderPage />
            <br/>
            <div>

                <h3>Thank You!</h3>
                
                <Link to="/">
                <Button  variant="contained" color="primary" onClick={this.handleNext}>Leave New Feedback</Button>
                </Link>
            </div>
        </div>
        
    );
  }
}

export default connect(mapReduxToProps)(Page5);