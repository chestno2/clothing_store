import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import ShoppingItems from "./Pages/shop/ShoppingItems.jsx"
import HeaderComponent from './Components/header/HeaderComponent';
import AuthenticationComponent from './Components/authentication/AuthenticationComponent';
import {auth} from "./firebase/Firebase.config"

import * as React from 'react'
class App extends React.Component {
  
  constructor()
  {
    super();
  this.state = {
    currentUser:null
  }
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
// any auth change will do 
  componentWillUnmount()
  {
    this.unsubscribeFromAuth()
    // permanent login
  }

  render(){
    return(
      <div className="App">
      <HeaderComponent  currentUser={this.state.currentUser}  />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShoppingItems} />
        <Route path="/signin" component={AuthenticationComponent} />
      </Switch>
      
    </div>
    )
  }
}
export default App;