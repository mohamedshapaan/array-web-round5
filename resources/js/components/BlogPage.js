import { Component } from "react";
import Banner from "./Banner";
import BlogSide from "./BlogSide";
import SinglePost from "./SinglePost";
import axios from "axios";
async function getUser() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/get');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
class BlogPage extends Component{
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
        return <>
            <Banner title="RECENT POSTS" heading="OUR RECENT BLOG ENTRIES"></Banner>
            
    <section class="blog-posts grid-system">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="all-blog-posts">
              <div class="row">
             {this.state.posts.map((post)=>{
                 return<SinglePost id={post.id} name={post.name} create={post.created_at} image={post.image}></SinglePost>
             }
             )}
                <div class="col-lg-12">
                  <ul class="page-numbers">
                    <li><a href="#">1</a></li>
                    <li class="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                  </ul>
                </div>
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
export default BlogPage;