import React, { useState, useEffect } from 'react';
import '../app.css';
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import { apiConnect } from "../api/Api";
import AddUser from "../api/AddUsers"
import { Navigate } from 'react-router-dom';


function Register() {

    const [success, setSuccess] = useState(false)

    const [formUser, setFormUser] = useState({
        id: "",
        username: "",
        password: "",
        confirmPassword: "",
        empresa: "",
        cif: "",
        email: "",
        direccion: "",
        localidad: "",
        cp: "",
    })


    const handleChange = ({ target }) => {
        const newFormUser = { ...formUser }
        newFormUser[target.name] = target.value
        setFormUser(prev => prev = newFormUser)
    }

    const handleSubmit = async (e) => {
  
        await AddUser(formUser)
        setSuccess(true)
    }

    return (
        <>
            {success && <Navigate to="/" />}

         

                <div className="mt-2 mb-5 text-center">
                    <div className="mb-5">

                        <form onSubmit={handleSubmit}>

                            <div className="username">
                                <input className="mb-3 form-control" type="text" id="username" name="username" placeholder="Username" value={formUser.username} onChange={handleChange} required />
                            </div>

                            <div className="row">
                                <div className="password col">
                                    <input className="mb-3 form-control" type="password" id="password" name="password" placeholder="Password" value={formUser.password} onChange={handleChange} required />
                                </div>
                                <div className="confirm-password col">
                                    <input className="mb-3 form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={formUser.confirmPassword} onChange={handleChange} required />
                                </div>
                            </div>

                            <hr />
                            <br />
                            <div className="row">
                                <div className="empresa col">
                                    <input className="mb-3 form-control" type="empresa" id="empresa" name="empresa" placeholder="Empresa" value={formUser.empresa} onChange={handleChange} required />
                                </div>
                                <div className="cif col">
                                    <input className="mb-3 form-control" type="text" name="cif" id="cif" placeholder="CIF" value={formUser.cif} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="email">
                                <input type="email" id="email" name="email" className="mb-3 form-control" placeholder="Email" value={formUser.email} onChange={handleChange} required />
                            </div>

                            <div className="direccion">
                                <input type="text" id="direccion" className="mb-3 form-control" name="direccion" placeholder="Dirección" value={formUser.direccion} onChange={handleChange} required />
                            </div>

                            <div className="row">
                                <div className="localidad col">
                                    <input className="mb-3 form-control" type="text" id="localidad" name="localidad" placeholder="Localidad" value={formUser.localidad} onChange={handleChange} required />
                                </div>
                                <div className="cp col">
                                    <input className="mb-5 form-control" name="cp" type="text" id="cp" placeholder="Codigo Postal" value={formUser.cp} onChange={handleChange} required />
                                </div>
                            </div>




                            <div className="d-grid">

                                <input type="submit" className="btn buttonLogin" value="Register" />

                            </div>

                        </form>
                    </div>
                </div>


        </>
    )
}
export default Register;