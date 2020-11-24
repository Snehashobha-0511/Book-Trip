import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
//import logo from './logo.jpg';
import './App.css';
//import About from './components/about/About';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


import Contact from './components/Contact_Us/Contact'; import Register from './components/Register/Register';
import Trip from './components/Trip_Package/Trip.'

function App() {
  return (
    <div className="App">
      
       <Router>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" >
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active" >
        <Link className="nav-link" to="/contact">Contact_Us</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Trip">Trip_Package</Link>
      </li>
     <li className="nav-item1 active">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item2 active"> 
        <Link className="nav-link" to="/Register">Register</Link>
      </li>
    </ul>
  </div>
</nav>
        
 

<Switch>
<Route exact path="/" component={Home}/>
<Route path="/Contact" component={Contact}/>
<Route path="/Trip" component={Trip}/>
<Route path="/Login" component={Login}/>
<Route path="/Register" component={Register}/>
</Switch>
        </Router>
        
        
      
    </div>
  );
}

export default App;
