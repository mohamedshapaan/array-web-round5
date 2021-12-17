import { Component } from "react";
import HomeBanner from "./HomeBanner";
import BlogSide from "./BlogSide";
import axios from "axios";
async function getUser() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/get');
    return response;
  } catch (error) {
    console.error(error);
  }
}
class HomePage extends Component{
  componentDidMount(){
    getUser().then(
      response=>{
        this.setState({
          posts:response.data
        })
      }
    );
  }
  state={
    posts:[]
  }
    render(){
        return<>
            <HomeBanner></HomeBanner>

            <section class="blog-posts">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="all-blog-posts">
              <div class="row">
                {
                  this.state.posts.map((post)=>{
                    return<div class="col-lg-12">
                    <div class="blog-post">
                      <div class="blog-thumb">
                        <img src={"assets/images/"+post.image+".jpg"} alt=""/>
                      </div>
                      <div class="down-content">
                        <span>{post.name}</span>
                        <ul class="post-info">
                          <li><a href="#">Admin</a></li>
                          <li><a href="#">{post.created_at}</a></li>
                          <li><a href="#">12 Comments</a></li>
                        </ul>
                        <p>{post.body}</p>
                        <div class="post-options">
                          <div class="row">
                            <div class="col-6">
                              <ul class="post-tags">
                                <li><i class="fa fa-tags"></i></li>
                                <li><a href="#">Beauty</a>,</li>
                                <li><a href="#">Nature</a></li>
                              </ul>
                            </div>
                            <div class="col-6">
                              <ul class="post-share">
                                <li><i class="fa fa-share-alt"></i></li>
                                <li><a href="#">Facebook</a>,</li>
                                <li><a href="#"> Twitter</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  })
                }
              
              </div>
            </div>
          </div>
          <BlogSide></BlogSide>
        </div>
      </div>
    </section>
        </>
    }
}
export default HomePage;