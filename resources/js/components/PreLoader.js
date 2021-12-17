import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';


class PreLoader extends Component {
    render(){
        return (
            <div id="preloader">
            <div class="loader">
      
            </div>
          </div>
        );
    }
}

export default PreLoader;