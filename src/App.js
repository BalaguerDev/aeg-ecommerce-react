
import './app.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Main from './components/main/Main';
import data from "../src/assets/db/db"
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const {products} = data;

  const onAdd = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      const newCartItems = cartItems.map ((x) =>
      x.id === product.id ? {...exist, qty: exist.qty +1} : x
      );

      setCartItems(newCartItems);
    }else{
      const newCartItems = [...cartItems,{...product, qty: 1}];
      setCartItems(newCartItems);
    }
  }

  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    }else{
      const newCartItems = cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty - 1} : x
      );
      setCartItems(newCartItems);
    }

    
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>

      <div className="rowFirst">
        <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>

    </div>
  );
}

export default App;
