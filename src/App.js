import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Postdatas  from './Postdatas';
import data from './data/data';
import a from './a';
import './App.css';
 
 
class App extends Component {
  render () {
    return (
      <div className='App'>
         <Postdatas/> ,<a/>
         </div>
    )
      
       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <ul className="navbar-nav mr-auto">
                    <h2 class="text-light">Grocery Store</h2> 
      
       
     <Router>
      
    

     <li class="nav-item nav-link">
        <Link   to={'/'}>Items</Link>  
             
         </li>
         
     
        <Switch>
    <Route exact path='/' component={Home}/>
  </Switch> 
  
 
 
         
 
   
 </Router>
                        
                        
                    </ul>
                     </nav>
                     */}
 

  
  }
}

 
 
      
   
   
export default App;
