import { Component } from "react";

class Item extends Component{
    render(){
        return <div class="item">
        <img src={"assets/images/"+this.props.image+".jpg"} alt=""/>
        <div class="item-content">
          <div class="main-content">
            <div class="meta-category">
              <span>Fashion</span>
            </div>
            <a href="post-details.html"><h4>{this.props.name}</h4></a>
            <ul class="post-info">
              <li><a href="#">Admin</a></li>
              <li><a href="#">{this.props.created_at}</a></li>
              <li><a href="#">12 Comments</a></li>
            </ul>
          </div>
        </div>
      </div>
    }
}
export default Item;