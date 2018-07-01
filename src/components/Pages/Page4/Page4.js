import React, { Component } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const mapReduxToProps = (reduxStore) => ({
    reduxStore
});

class Page4 extends Component {

    handleChange = (event) => {
        const action = {type: 'ADD_INPUT', var: 'comments', payload: event.target.value};
        this.props.dispatch(action);
    }//end handleChange

    handleNext = () => {
        console.log('click');

        axios.post('/feedback', this.props.reduxStore.feedback)
            .then( (response) => {
                console.log('Updated DB', response.data);
                        
            }).catch( (error) => {
                console.log('Error posting to DB');
                        
            });
        
    } // end handleNext

  render() {
    return (

        <div>
            <HeaderPage />
            <br/>
            <div>
                <Card>
                    <CardContent>
                        <p>4 of 4 pages</p>
                        
                        <p>Any Comments you want to leave?</p>
                        <TextField label="Comments" type="text" onChange={this.handleChange}/>
                        <br/>
                        <br/>
                        <Link to="/5" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="primary" onClick={this.handleNext}>Submit</Button>
                        </Link>
                    </CardContent>
                </Card>
               

            </div>
        </div>
        
    );
  }
}

export default connect(mapReduxToProps)(Page4);