import { useState } from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import '../app.css';
import { Link, Navigate, withRouter } from 'react-router-dom';




export default function Login() {
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordError, setPasswordError ] = useState(false)
  const [ isLogin, setIsLogin ] = useState(false);
  const [ errorLogin, setErrorLogin] = useState(false)


  function handleChange(name,value) {
    if(name === "usuario"){
      setUser(value)
      setErrorLogin(false);
    } else {
      if (value.length < 6){
        setPasswordError(true)
        setErrorLogin(false);
        
      } else {
        setPasswordError(false)
        setPassword(value)
        setErrorLogin(false);
      }
    }
  };

  function ifMatch(param) {
    if(param.user.length > 0 && param.password.length > 0){
      if(param.user === "balaguer" && param.password === "123456"){
        const { user, password } = param;
        let accountUser = {user, password};
        let account = JSON.stringify(accountUser);
        localStorage.setItem("account" , account);
        setIsLogin(true)
      } else {
        setIsLogin(false);
        setErrorLogin(true)
      }
    } else {
      setIsLogin(false);
      setErrorLogin(true)
    }
  }

  function handleSubmit() {
    let account = { user, password }
    if (account){
      ifMatch(account)
    }
  };

  console.log("usuario:", user)

  return (
    <div className="mt-5 pt-5 containerLogin">
       
      {isLogin && ( 
        <Navigate to ="/" replace={true}/> )}
    

      <Container >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4 text-center">
                  <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle" />
                  <p className=" mb-5">Login</p>
                  <div className="mb-3">
                    {errorLogin &&
                        <label className="label-alert mb-3">
                          Usuario o contraseña incorrectos
                        </label>
                      }
                    
                      {/* input user */}
                      <input id="usuario" name="usuario" placeholder="Email" type="text" onChange={ (e) => handleChange(e.target.name, e.target.value)} className="mb-3 form-control"/>
                        
                      {/* input password */}
                      <input  id="contraseña" name="contraseña" placeholder="password" type="password" onChange={ (e) => handleChange(e.target.password, e.target.value)} param={passwordError} className="mb-3 form-control"/>

                    

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="textRegister" href="#!">
                            Has olvidado tu contraseña?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">

                        <button onClick={handleSubmit} className="buttonLogin">Login</button>
                        
                      </div>
                    
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        No tienes cuenta{" "}
                        <Link to="/register" className="textRegister fw-bold">
                          Registrate
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}