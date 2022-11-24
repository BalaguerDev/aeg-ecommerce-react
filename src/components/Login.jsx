
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import { useContext, useState } from 'react';
import '../app.css';
import { AuthContext } from '../auth/context/AuthContext';
import { Link, Navigate } from 'react-router-dom';




const Login = () => {
  const login = useContext(AuthContext);
  
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginState;



  const onInputChange = ({ target }) => {         /* obtener datos del input */
    const { name, value } = target;
    setLoginState({
      ...loginState,
      [name]: value
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username === null || password === null) {
  
      console.warn('Porfavor complete todos los inputs');
      alert("Porfavor complete todos los inputs")
      return;
    }
    const userLogin = {
      username,
      password,
    };

    const verifiedUser = async (userLogin) => {
      try {
        const url = "http://localhost:3000/users";
        const response = await fetch(url);
        const usersJson = await response.json()

        const users = usersJson;

        const correctLogin = users.find(
          (user) =>
            user.username === userLogin.username && user.password === userLogin.password
        );

        if (correctLogin) {
          console.log(correctLogin)
          login(correctLogin);
          alert("Inicio de sesión exitoso")
          return;
        }

      } catch (error) {
        
        const message = error.statusText || 'unknown error';
        console.error(`Error ${error.status}: ${message}`);
      }
    };

    verifiedUser(userLogin);

    // reset form
    setLoginState({
      username: '',
      password: '',
    });
  };



  return (
    <>
      <div className="">
        <div className="mb-3 mt-md-4 text-center">
          <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle" />
          <p className=" mb-2">Login</p>
          <div className="mb-3">

            <form onSubmit={onSubmit} >
              <input type="text" className="mb-3 form-control" name="username" value={username} onChange={onInputChange} />

              <input type="text" className="mb-3 form-control" name="password" value={password} onChange={onInputChange} />

              <div className="d-grid">
                <input type="submit" className="btn buttonLogin" value="Iniciar Sesión"/>
              </div>
            </form>



          </div>
        </div>

      </div>

    </>
  );
}

export default Login;