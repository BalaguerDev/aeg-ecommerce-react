import './app.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import data from "./assets/db/db"
import { useEffect, useState } from 'react';


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
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }else{
      const newCartItems = [...cartItems,{...product, qty: 1}];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  }

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
  }
    

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty > 0){
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  }
 

  
  

  useEffect(() => {
    setCartItems(localStorage.getItem("cartItems")
     ? JSON.parse(localStorage.getItem("cartItems"))
     : []
     )
  },[]);

  
  return (
    <div className="App">
      <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} countCartItems={cartItems.length}/>

      <div className="row">
        <Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>
      </div>

    </div>
  );
}

export default App;
