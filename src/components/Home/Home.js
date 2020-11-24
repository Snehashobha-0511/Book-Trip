import React from 'react';
import './Home.css'


export default function Home(){
    return(
        <div>
        
            <h1 id="home">Welcome to bookmytrip</h1>
           <div className="card" style={{width: "23rem"}}>
                <img src="\images\Mangalore.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text">Name: Mangalore<br/>State: Karnataka</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\Goa.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"blue"}} class="card-text">Name:Goa<br/> State:Goa</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\Bangalore.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"Bangalore"}} class="card-text">Name: Bangalore<br/>State: Karnataka</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\Murudeshwara.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text">Name: Murudeshwara<br/> State: Karnataka</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\Delhi.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"crimson"}} class="card-text">Name: Delhi<br/> State: Delhi</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\Gokarna.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text">Name: Gokarna <br/> state: Karnataka</p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\Taj Mahal.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"crimson"}} class="card-text">Name: Taj Mahal<br/> State: Delhi</p>
            </div>
            </div>

        
        </div>
    )
}