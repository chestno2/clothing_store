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
import { connect } from 'react-redux';
import  {setCurrentUser} from "./redux/User/user.actions"
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async auth => {
      if (auth) {
        const userRef = await createProfileDocument(auth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(auth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShoppingItems} />
          <Route path='/signin' component={AuthenticationComponent} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);