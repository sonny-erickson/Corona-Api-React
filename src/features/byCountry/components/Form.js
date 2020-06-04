import React, { Component } from 'react';
import * as axios from "axios";


class Form extends Component {

    componentDidMount() {
        axios.get(`https://api.covid19api.com/live/country/south-africa`)
        .then(res => {
              console.log(res)
            })
            .catch(err => console.log(err));
  }
            
      



    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Form;



