
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import '../app.css';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';



export default function Login() {


  return (
    <>
      <div className="">
        <div className="mb-3 mt-md-4 text-center">
          <img src="../assets/logo-AEGcolor.png" alt="logoAEG" className="logoTitle" />
          <p className=" mb-2">Login</p>
          <div className="mb-3">

            <form>
              <input className="mb-3 form-control" autoComplete="off" type="text" name="username" placeholder="Username" autoFocus required />

              <input className="mb-3 form-control" type="password" placeholder="Password" name="password" required />

              <div className="d-grid">

                                <input type="submit" className="btn buttonLogin" value="Iniciar Sesión" />

                            </div>
            </form>


          </div>
        </div>

      </div>
    
    </>
  );
}