import { Component } from "react";

class SignUp extends Component{
    render(){
        return          <form action="{{Route('sub')}}"  class="mb-3 row" method="post">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
            </div>
            <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword"/>
            </div></div>
            <button type="submit" class="btn btn-primary">signup</button>
        
                   </form>
    }
}
export default SignUp;