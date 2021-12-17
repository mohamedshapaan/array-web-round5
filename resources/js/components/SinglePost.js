import React, { Component } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class SinglePost extends Component {
    render(){
        return (
            <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src={"assets/images/"+this.props.image+".jpg"} alt=""/>
                    </div>
                    <div class="down-content">
                      <span>Lifestyle</span>
                      <Link to={"/singlepost/"+this.props.id}><h4>{this.props.name}</h4></Link>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">{this.props.create}</a></li>
                        <li><a href="#">12 Comments</a></li>
                      </ul>
                     
                      <div class="post-options">
                        <div class="row">
                          <div class="col-lg-12">
                            <ul class="post-tags">
                              <li><i class="fa fa-tags"></i></li>
                              <li><a href="#">Best Templates</a>,</li>
                              <li><a href="#">TemplateMo</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }
}

export default SinglePost;