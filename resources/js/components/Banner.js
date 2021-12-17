import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Banner extends Component {
    render(){
        return (
            <div class="heading-page header-text">
      <section class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-content">
                <h4>{this.props.title}</h4>
                <h2>{this.props.heading}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        );
    }
}

export default Banner;