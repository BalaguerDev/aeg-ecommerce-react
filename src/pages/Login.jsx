
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import '../app.css';
import loginUsers from "../api/LoginUsers";

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';



export default function Login() {
      // Gathering the existing users in the system
      const [existingUsers, setExistingUsers] = useState([])

      useEffect(() => {
          const retrieveUsers = async() => {
              const users = await fetchUsers();
              setExistingUsers(users)
          }
          retrieveUsers();
      }, [])
  
      // Manage of values by "useFormController()" <-- custom hook
      const { form, changeValue } = useFormController()
  
      // Manage inputs validation state
      const validUsername = form.username.length > 0 ? true : false;
      const validPwd = form.password.length > 5 ? true : false;
  
      const inputCheck = (a, b) => {
          const ok = (a && b) ? true : false;
          return ok;
      };
  
      const usernameState      = validUsername ? "form-control is-valid" : "form-control is-invalid"
      const pwdState           = validPwd ? "form-control is-valid" : "form-control is-invalid"
      const btnState           = inputCheck(validUsername, validPwd) ? "btn btn-outline-success col-8" : "btn btn-outline-warning col-8";
      const enableSubmit       = inputCheck(validUsername, validPwd) ? "" : "disabled";
      const invalidMsgUsername = form.username === "" ? "d-none" : "invalid-feedback"; 
      const invalidMsgPwd      = form.password === "" ? "d-none" : "invalid-feedback"; 
  
      // Submit functions
      const dispatch = useDispatch();
  
      const [sendProfile, setSendProfile] = useState(null)
      useEffect(()=>{
          setSendProfile(prev => prev = null)
      }, [sendProfile])


  return (
    <>
    <div className="mt-5 pt-5 containerLogin">
      <Container >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4 text-center">
                  <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle" />
                  <p className=" mb-5">Login</p>
                  <div className="mb-3">
              
                  <form onSubmit={submitUser}>
                    <input className="mb-3 form-control" onChange={changeValue} value={form.username} autoComplete="off" type="text" name="username" autoFocus required/>

                    <input className="mb-3 form-control" onChange={changeValue} value={form.password} type="password" name="password" required/>

                    <input type="submit" className="btn buttonLogin" value="Iniciar Sesión" disabled={enableSubmit}/>
                   </form>
  
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
    </>
  );
}