import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { Route } from "react-router-dom"
import { Switch, Redirect } from 'react-router-dom';
import ShoppingItems from "./Pages/shop/ShoppingItems.jsx"
import HeaderComponent from './Components/header/HeaderComponent';
import AuthenticationComponent from './Components/authentication/AuthenticationComponent';
import { auth } from "./firebase/Firebase.config"
import { createProfileDocument, addCollectionAndDocuments } from './firebase/Firebase.config';
import * as React from 'react'
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/User/user.actions"
import { selectCollectionsForPreview } from './redux/Shop/shopSelector';
import CheckoutPage from './Pages/Checkoutcomponent/CheckoutPage';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/User/user.selector';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    //USEEFFECT

    const { setCurrentUser, collectionArray } = this.props;
    //auth is the library we are getting from firebase whenever the state changes
    //whole auth we send it to create profile document
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async auth => {
      if (auth) {
        const userRef = await createProfileDocument(auth);
        console.log(userRef);
        console.log(auth);
        //set current user is an action that sets the user
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(auth);
      addCollectionAndDocuments("collections", collectionArray.map(({ title, items }) => ({
        title, items
      })))
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

// const mapStateToProps = ({ user }) => ({

//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({

  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  //prop name : dispatch means pass everything to the reducer new action
  setCurrentUser: user => dispatch(setCurrentUser(user))

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);