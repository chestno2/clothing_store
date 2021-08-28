import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import ShoppingItems from "./Pages/shop/ShoppingItems.jsx"
import HeaderComponent from './Components/header/HeaderComponent';
import AuthenticationComponent from './Components/authentication/AuthenticationComponent';
import {auth} from "./firebase/Firebase.config"
import { createProfileDocument } from './firebase/Firebase.config';
import * as React from 'react'
class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
// storing data of the user signin in Firebase
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
   
      else{
      this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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