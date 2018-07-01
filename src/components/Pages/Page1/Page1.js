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

class Page1 extends Component {

    handleChange = (event) => {
        const action = {type: 'ADD_INPUT', var: 'feeling', payload: event.target.value};
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
                        <p>1 of 4 pages</p>
                        
                        <p>How are you feeling today?</p>
                        <TextField label="1 - 5" type="number" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <Link to="/2" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="primary" onClick={this.handleNext}>Next -></Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    );
  }
}

export default connect(mapReduxToProps)(Page1);