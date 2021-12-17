import React, { Component } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Nav extends Component {
    render(){
        return (
            <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><h2>AOAM<em>.</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li> 
              <li class="nav-item active">
              <Link class="nav-link" to="/aboutus">About us
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/blogPage">posts
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
             
              <li class="nav-item">
              <Link class="nav-link" to="/contactus">contact us
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        );
    }
}

export default Nav;