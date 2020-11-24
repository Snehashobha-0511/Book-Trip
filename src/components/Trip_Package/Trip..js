import React from 'react';
import './Trip.css'

export default function Trip(){
    return(
        <div>
        <h1 id="pack">Package Details</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">SLNo:</th>
      <th scope="col">Package Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mangalore</td>
      <td>9,860/-</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Goa</td>
      <td>10999/-</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Bangalore</td>
      <td>5599/-</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Murudeshwara</td>
      <td>6999/-</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Taj Mahal</td>
      <td>12350/-</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Gokarna</td>
      <td>6000/-</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Delhi</td>
      <td>17600/-</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}