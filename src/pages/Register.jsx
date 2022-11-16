import React from 'react'
import '../../src/app.css';

const Register = () => {
  return (
    <section className="h-100 bg-dark">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img src="public\assets\background\backRegister.jpg"
                  alt="Sample photo" className="img-fluid"
/>
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase text-center">REGISTRO TIENDA AEG</h3>
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m1" className="form-control form-control-lg" placeholder="Usuario*" required/>

                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n1" className="form-control form-control-lg" placeholder="Contraseña*" required/>

                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Nombre*" required/>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder="Apellido*" required/>
                      </div>
                    </div>
                  </div>
  

  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example8" className="form-control form-control-lg" placeholder="Email*" required/>
                   
                  </div>
  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="NIF/DNI/CIF*" required />
                      </div>
                    </div>

                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="number" id="form3Example1n" className="form-control form-control-lg" placeholder="Teléfono*" />
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4"/>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example9" className="form-control form-control-lg"placeholder="Dirección" />
                </div>

  
                <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1m1" className="form-control form-control-lg" placeholder="Ciudad" required/>

                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="number" id="form3Example1n1" className="form-control form-control-lg" placeholder="Codigo Postal" required/>

                      </div>
                    </div>
                  </div>
  
                  
  
                  <div className="d-flex justify-content-end pt-3">
                    <button type="button" className="btn btn-outline-dark btn-lg w-25">Limpiar</button>
                    <button type="button" className="btn btn-dark btn-lg ms-2 ">Registro</button>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register