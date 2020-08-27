import React from 'react';
import Dashboard from './Dashboard';
import { ApiClient } from './apiClient';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.client = new ApiClient()
  }

  render() {
      return( 
      <>
      <Dashboard client={this.client}/>
      </>
      )
  }
}

export default App;
