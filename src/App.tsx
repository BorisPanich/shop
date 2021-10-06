import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './u4-features/Header';
import { Cart } from './u5-pages/Cart';
import { Home } from './u5-pages/Home';

export const path = {
  HOME: '/',
  CART: '/cart'
}

function App() {

  const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path={path.HOME} render={() => <Home />} />
          <Route exact path={path.CART} render={() => <Cart />} />
        </div>
      </div>
    </div>
  );
}

export default App;
