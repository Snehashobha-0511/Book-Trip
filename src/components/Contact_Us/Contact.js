import React from 'react';
import './Contact.css'

export default function Contact(){
    return(
        <div>
        
            <h1 class="cont">Contact Us</h1>
            <div className="card" style={{width: "20rem", 
            marginLeft:"500px",
             border: "2px solid skyblue",
              padding:"10px",}}>
  <img src="\images\Tourism.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p style={{color:"green"}} class="card-text">Name: book-trip<br/> Contact: 9900886633<br/> Website: www.bookmytrip.com</p>
  </div>
</div>
            
       
        </div>
    )
}