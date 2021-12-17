import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Banner from './Banner';


class AboutUs extends Component {
    render(){
        return (
         <>
          <Banner title="ABOUT US" heading="MORE ABOUT US!"></Banner>
            <div class="about-us">
                
            <div class="container">
                
              <div class="row">
                <div class="col-lg-12">
                  <img src="assets/images/about-us.jpg" alt=""/>
                </div>
              </div>
              
              <div class="row">
                <div class="col-lg-6">
                <h4>Two-One Donec porttitor augue</h4>
                    <p>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                </div>
                <div class="col-lg-6">
                <h4>Two-Two Donec porttitor augue</h4>
                    <p>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                </div>
              </div>
              
              <div class="row">
                <div class="col-lg-4 col-md-6">
                <h4>1-03 Donec porttitor augue</h4>
                    <p>Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                </div>
                <div class="col-lg-4 col-md-6">
                <h4>2-03 Donec porttitor augue</h4>
                    <p>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                </div>
                <div class="col-lg-4">
                <h4>3-03 Donec porttitor augue</h4>
                    <p>Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                </div>
              </div>
              
              
              <div class="row">
                <div class="col-lg-3 col-md-6">
                <h4>01 Four Columns</h4>
                    <p>Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc dapibus posuere.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                <h4>02 Four Columns</h4>
                    <p>Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                <h4>03 Four Columns</h4>
                    <p>Morbi ac interdum metus. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                </div>
                <div class="col-lg-3 col-md-6">
                <h4>04 Four Columns</h4>
                    <p>Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel tellus semper interdum et id sapien.</p>
                </div>
              </div>
              
              <div class="row">
                <div class="col-lg-12">
                  <ul class="social-icons">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              
              
            </div>
          </div>
         </>
        );
    }
}

export default AboutUs;