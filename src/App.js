import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Register from './component/register/register';
import Login from './component/login/login';
import Home from './component/Dashboard/home/home.js';
import Cart from './component/Dashboard/cart/cart';
import Singledish from './component/Dashboard/home/categories/singledish';
import Alldish from './component/Dashboard/All dish/alldish';
import Profile from './component/Dashboard/profile/profile';
import FloatingCart from './component/Dashboard/cart/FloatingCart';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getTotals } from './component/Dashboard/cart/cartslice';
import BoissonMenu from './component/Dashboard/home/categories/Boisson/BoissonMenu.js';
import DessertMenu from './component/Dashboard/home/categories/Dessert/DessertMenu.js';
import EntriesMenu from './component/Dashboard/home/categories/Entries/EntriesMenue.js';
import PlatsMenu from './component/Dashboard/home/categories/Plats/PlatsMenu.js';
import SaladesMenu from './component/Dashboard/home/categories/Salades/SladeMenu.js';

function App() {
  store.dispatch(getTotals())

  return (
    <div style={{height:'100%'}}>
      
      <BrowserRouter>
      <Provider store={store}>
      <Switch>
        <Route  exact path='/restoApp'><Home /><FloatingCart /></Route>
        {/*<Route path='/login'> <Login /></Route>*/}
        <Route  exact path='/'><Home /><FloatingCart /></Route>
        <Route path='/restoApp/Boisson'><BoissonMenu/><FloatingCart /> </Route>
        <Route path='/restoApp/Dessert'><DessertMenu/><FloatingCart /> </Route>
        <Route path='/restoApp/Entries'><EntriesMenu/><FloatingCart /> </Route>
        <Route path='/restoApp/Plats'><PlatsMenu/><FloatingCart /> </Route>
        <Route path='/restoApp/Salades'><SaladesMenu/><FloatingCart /> </Route>
        <Route path='/restoApp/home'> <Home /><FloatingCart /></Route>

        <Route path='/cart'> <Cart /><FloatingCart /></Route>
        <Route path='/singledish'> <Singledish /><FloatingCart /></Route>
        <Route path='/alldish'> <Alldish /><FloatingCart /></Route>
        <Route path='/profile'> <Profile /><FloatingCart /></Route>
      </Switch>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
