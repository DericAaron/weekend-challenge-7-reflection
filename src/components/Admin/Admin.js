import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {

    constructor(props){
        super(props);

        this.state = {feedback: []};
    } //end constructor

    getFeedBack = () => {
      axios.get('/feedback')
        .then( (response) => {
          const stuff = response.data
          console.log(response.data);
          this.setState({feedback: stuff});
        }).catch( (err) => {
          console.log('Error in get');
          
        });
    }//end getFeedback

    deleteFeedback = (id) => {
      axios.delete(`/feedback/${id}`)
        .then( (response) => {
          console.log('Deleted');
          this.getFeedBack();
        }).catch( (error) => {
          console.log('Error in Delete');
          
        });
    }

    componentDidMount(){
      this.getFeedBack();
    }

  render() {
    return (

        <div>
            <header>
              <h2>Feedback Results! </h2>
            </header>
            <br/>
            <div>
               <table>
                 <thead>
                   <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                  </tr>
                 </thead>
                 <tbody>
                   {
                     this.state.feedback.map( item => 
                       <tr key={item.id}>
                         <td>{item.feeling}</td>
                         <td>{item.understanding}</td>
                         <td>{item.support}</td>
                         <td>{item.comments}</td>
                         <td><button onClick={() => this.deleteFeedback(item.id)}>Delete</button></td>
                       </tr>
                     )
                   }
                 </tbody>
               </table>
            </div>
        </div>
        
    );
  }
}

export default Admin;