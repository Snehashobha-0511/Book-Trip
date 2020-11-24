import React from 'react';
import './Register.css'


export default function Register(){
    return(
        <div>
        <h1 className="reg">Registration Page</h1>
             <form action="success.html" name="form1" onsubmit="return validateForm()">
            <div class="col-sm-10">
                <label for="name" id="name" className="col-sm-10 col-form-label">Name</label>
                <input type="text" className="form-control" placeholder="Full name" name="name1" />
            </div>
            <div class="form-group ">
                <label for="inputEmail3" className="col-sm-10 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Enter E-mail" name="email1"/>
                </div>
            </div>
            <div class="col">
                <label for="name" className="col-sm-10 col-form-label">Phone Number:</label>
                <input type="text" className="form-control" placeholder="Enter Your Phone Number" name="name1" />
            </div>
            <div class="form-group ">
              <label for="inputEmail3" className="col-sm-10 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="psw1"/>
              </div>
            </div>
                
            <div className="form-check form-check-inline">
            <label>Gender:</label>
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                <label classname="form-check-label" for="inlineRadio3">Others</label>
            </div>
            <div classname="form-group1">
                 <label for="exampleFormControlTextarea1">Address:</label>
                 <textarea name="ta" class="form-control" id="exampleFormControlTextarea1" rows="6">Write Here:</textarea>
            </div>
            <div classname="form-group col-md-10">
                    <label for="inputState">Favoruite Place:</label>
                    <select id="inputState" class="form-control">
                      <option selected>Selecte Place...</option>
                      <option value="">Tirupathi</option>
                      <option value="">Goa</option>
                      <option value="">Kulumanali</option>
                      <option value="">Andaman Nikobar</option>
                      <option value="">Charminar</option>
                      <option value="">Udaipur</option>
                      <option value="">Hampi</option>
                      <option value="">Delhi</option>
                      <option value="">Varanasi</option>
                      <option value="">Jaisalmer</option>
                 </select>
            </div>
            <div classname="col-auto my-1">
                    <button type="submit" class="btn btn-dark">Submit</button>
                  </div>
            
            </form>
        </div>
    )
}