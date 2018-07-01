import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class HeaderPage extends Component {
  render() {
    return (
        <div>
          <Card>
            <CardContent>
              <h2>Feedback!</h2>
            </CardContent>
          </Card>
        </div>
    );
  }
}

export default HeaderPage;