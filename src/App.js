import './App.css';
import Homepage from './Pages/homepage/Homepage';
import { Route } from "react-router-dom"
import { Switch } from 'react-router-dom';
import ShoppingItems from "./Pages/shop/ShoppingItems.jsx"
import HeaderComponent from './Components/header/HeaderComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShoppingItems} />
      </Switch>
      
    </div>
  );
}

export default App;
