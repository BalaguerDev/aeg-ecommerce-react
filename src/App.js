import './app.css';
import Header from './components/header/Header';
import Main from './routes/pages/main/Main';
import CheckoutCart from './routes/pages/checkoutCart/CheckoutCart';

import dataProduct from "./assets/db/db"
import { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import {Switch, BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const {products} = dataProduct;

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

    
      <Router>
        
        <div className="App">
          <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} countCartItems={cartItems.length}/>
        
            <Routes>

              <Route path="/pedido" element={<CheckoutCart/>} />
              
              <Route path="/" element={<Main cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} products={products}/>} />
              
            </Routes>
            
          <Footer/>
          
        </div>
      </Router>

     
      
 
    
  );
}

export default App;
