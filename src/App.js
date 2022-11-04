
import './app.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Main from './components/main/Main';
import data from "./assets/db/db"
import { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const {products} = data;

  /* function add product */
  const onAdd = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      const newCartItems = cartItems.map ((x) =>
      x.id === product.id ? {...exist, qty: exist.qty +1} : x
      );

      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }else{
      const newCartItems = [...cartItems,{...product, qty: 1}];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  }

  /* function remove product */
  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }else{
      const newCartItems = cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty - 1} : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  useEffect(() => {
    setCartItems(localStorage.getItem("cartItems")
     ? JSON.parse(localStorage.getItem("cartItems"))
     : []
     )
  },[]);


  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>
      <Hero/>

      <div className="rowFirst">
        <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>

    </div>
  );
}

export default App;
