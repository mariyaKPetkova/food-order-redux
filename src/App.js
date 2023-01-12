import { Fragment,useState } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
function App() {
  const [cartShow,setCartShow] = useState(false)
  const showCartH = () =>{
    setCartShow(true)
  }
  const hideCartH = () =>{
    setCartShow(false)
  }
  return (
    <CartProvider>
      <Header onShowCart={showCartH}/>
      <main>
        <Meals/>
      </main>
      {cartShow && <Cart onClose={hideCartH}/>}
    </CartProvider>
  );
}

export default App;
