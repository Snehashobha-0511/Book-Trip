

import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

export default function Login() {
    return (
        <div>
            <h1>Login Here</h1>
            <form name="validform" onSubmit="return validatePassword()">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address:</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email...." name="email1"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
              <label for="exampleInputPassword1">Password:</label>
              <input type="password" class="form-control" id="exampleInputPassword1" name="pasword1" placeholder="enter password...."/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Conform Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="pasword2" placeholder="re-enter password...."/>
              </div>
            <button type="submit" class="btn btn-dark">Submit</button>
            <br/>
            <Link to="/Register" className="link">Please Register</Link>
          </form>
          
          
        </div>
      
       
        
        

    )
}
