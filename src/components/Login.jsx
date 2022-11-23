
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import '../app.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import loginUsers from "../api/LoginUsers";
import Main from "../pages/Main";


export default function Login() {
  const [logged, setLogged] = useState("false")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin,setUserLogin] = useState("false")  
  const url = "http://localhost:3000/users";

  useEffect(()=>{
    const connection = async () => {
        const response = await loginUsers(url);
        setUserLogin(prev => prev = response);
    }
    connection()
}, [url])



  function clickLogin(e){
    e.preventDefault();
    const inputUser = document.getElementById("inputUser").value
    const inputPwd = document.getElementById("inputPwd").value

    if(inputUser === 0 || inputPwd === 0){
      alert("Complete los campos con sus datos de inicio de sesión")
    } else {
      if (username === userLogin.username && password){
        
        setLogged("true")
        document.getElementById("formLogin").style.display="none"
        alert("Inicio de sesión exitoso")
      } else {
        setLogged("false")
        alert("Error! Usuario o contraseña incorrectos")
        const inputUser = document.getElementById("inputUser").value=""
        const inputPwd = document.getElementById("inputPwd").value=""
      }
      console.log(userLogin.username)
    }
 

  } 


  

 



  return (
    <>
      <div className="">
        <div className="mb-3 mt-md-4 text-center">
          <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle"/>
          <p className=" mb-2">Login</p>
          <div className="mb-3">

            <form id="formLogin" >
              <input 
                className="mb-3 form-control" 
                autoComplete="off" 
                id="inputUser"
                type="text" 
                value={username}
                name="username" 
                placeholder="Usuario" 
                autoFocus 
                required
                onChange={({target})=> setUsername(target.value)}/>

              <input 
                className="mb-3 form-control" 
                type="password"
                id="inputPwd" 
                value={password}
                name="password" 
                placeholder="Contraseña" 
                autoFocus 
                required
                onChange={({target})=> setPassword(target.value)}/>       

              <div className="d-grid">
                <input type="submit" value="Iniciar Sesión" onClick={clickLogin} />
              </div>
            </form>
            {logged === "true" && <Main/>}


          </div>
        </div>

      </div>
   
    </>
  );
}