import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import ShoppingItems from "./Pages/shop/ShoppingItems.jsx"
import HeaderComponent from './Components/header/HeaderComponent';
import AuthenticationComponent from './Components/authentication/AuthenticationComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShoppingItems} />
        <Route path="/signin" component={AuthenticationComponent} />
      </Switch>
      
    </div>
  );
}

export default App;
