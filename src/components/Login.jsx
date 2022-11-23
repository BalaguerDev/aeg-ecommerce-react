
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import '../app.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import loginService from "../services/axioslogin"


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState(null)
  
  
  
 




  const handleLogin = async (e) => {
    e.preventDefault()
    const user = await loginService.login({
      username,
      password
    })

    setUser(user)
    setUsername("")
    setPassword("")
  }
  return (
    <>
      <div className="">
        <div className="mb-3 mt-md-4 text-center">
          <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle"/>
          <p className=" mb-2">Login</p>
          <div className="mb-3">

            <form onSubmit={handleLogin}>
              <input 
                className="mb-3 form-control" 
                autoComplete="off" 
                type="text" 
                value={username}
                name="username" 
                placeholder="Usuario" 
                autoFocus 
                required
                onChange={({target})=> setUsername(target.value)}/>

              <input 
                className="mb-3 form-control" 
                type="passwords" 
                value={password}
                name="password" 
                placeholder="Contraseña" 
                autoFocus 
                required
                onChange={({target})=> setPassword(target.value)}/>       

              <div className="d-grid">
                <button>Iniciar Sesión</button>
              </div>
            </form>


          </div>
        </div>

      </div>
   
    </>
  );
}