import React, { Component } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class Page2 extends Component {

    handleChange = (event) => {
        const action = {type: 'ADD_INPUT', var: 'understanding', payload: event.target.value};
        this.props.dispatch(action);
    }//end handleChange

  render() {
    return (

        <div>
            <HeaderPage />
            <br/>
            <div>
                <Card>
                    <CardContent>
                        <p>2 of 4 pages</p>
                        
                        <p>How well are you understanding the content?</p>
                        <TextField label="1 - 5" type="number" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <Link to="/3" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="primary" onClick={this.handleNext}>Next -></Button>
                        </Link>
                    </CardContent>
                </Card> 
            </div>
        </div>
        
    );
  }
}

export default connect(mapReduxToProps)(Page2);