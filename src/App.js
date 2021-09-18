import './App.css';
import Aux from './hoc/Auxilliary';
import Header from './Components/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import ViewCake from './Components/Items/ViewProduct/ViewCake';
import Checkout from './Components/CheckOut/Checkout';

function App() {
  return (
    <BrowserRouter>
        <Aux className="App">
          <Header/>
        </Aux>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/cart" exact>
            <Cart/>
          </Route>
          <Route path="/viewCake" exact>
            <ViewCake/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Route path="/aboutUs" exact>
            <AboutUs/>
          </Route>
          <Route path="/checkOut" exact>
            <Checkout/>
          </Route>
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
