import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { Route } from "react-router-dom"
import { Switch, Redirect } from 'react-router-dom';
import ShoppingItems from "./Pages/shop/ShoppingItems.jsx"
import HeaderComponent from './Components/header/HeaderComponent';
import AuthenticationComponent from './Components/authentication/AuthenticationComponent';
import { auth } from "./firebase/Firebase.config"
import { createProfileDocument } from './firebase/Firebase.config';
import * as React from 'react'
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/User/user.actions"
import { selectCurrentUser } from './redux/User/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './Pages/Checkoutcomponent/CheckoutPage';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async auth => {
      if (auth) {
        const userRef = await createProfileDocument(auth);

        //set current user is an action that sets the user
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

    console.log();

    return (
      <div>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShoppingItems} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to="/" /> : (<AuthenticationComponent />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  //prop name : dispatch means pass everything to the reducer new action
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

console.log(mapDispatchToProps);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);