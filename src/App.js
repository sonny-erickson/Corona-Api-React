import React, { Component } from 'react';
import { Header} from './components';
import World from './features/world';
import ByCountry from './features/byCountry';
import apiCovid from './conf/api.corona'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null,
      loading:false
    }
    
  }

  componentDidMount() {
    
    apiCovid.get("global=stats")
        .then(res => {
          const data = res.data.results[0];         
          this.updateData(data);
        })
        .catch(err => console.log(err));
  }

  updateData= (data) =>{
     this.setState({
       loading:true,
       data:data
    })
    
   } 

  render() {
    return (
      <Router>
      <div className="App d-flex flex-column">
         <Header />
          <Switch>
              
              <Route path="/world">
                  <World 
                    data={this.state.data} 
                    updateData={this.updateData} 
                    loading={this.state.loading}
                  />
              </Route>
              <Route path="/country" component={ByCountry}/>
              <Redirect to="/world" />
            
         </Switch>
      </div>
      </Router>
    )
  }
}
