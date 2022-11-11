import React from 'react'

const CheckoutCart = () => {
  return (

    <div className="min-vh-100">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Finalizar su Pedido</h1>
            <p>Inicie sesión o registrese ➤ Completa los campos requeridos para procesar su compra ➤ Cualquier duda póngase en contacto al 935 322 901 (Lunes a Sábado de 7:00 a 17:00). </p>

            <hr />
          </div>
        </div>

        <div className="row">

          <div className="col-md-4 col-sm-5 col-xs-12-col-12">
            <div className="row">
              <div className="col-xs-12 col-12">
                <div className="row">
                  <h6 className="col d-flex justify-content-between align-items-center">Tus datos</h6>
                  <button type="button" id="opc_show_login" className="col btn btn-sm btn-outline-dark btn-xs float-lg-right">
                    Iniciar Sesion
                  </button>

                  <hr className="my-3" />

{/* CONTACT USER FORM  */}
                  <form id="form_customer" autocomplete="on" className="has-validation-callback">
                    <div className="row">
                      <div>

                        {/* Form Email */}
                        <input class="form-control form-control-sm my-1" type="text" placeholder="Email" aria-label="Email" />
                      </div>
                    </div>

                    <div className="row">
                      <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                        {/* Form Name */}
                        <input class="form-control form-control-sm" type="text" placeholder="Nombre" aria-label="Email" />
                      </div>

                      <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                        {/* Form LastName */}
                        <input class="form-control form-control-sm" type="text" placeholder="Apellido" aria-label="Email" />
                      </div>
                    </div>

                  </form>
                  <p>
                    <a class="btn btn-outline-dark btn-block btn-lg" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Información de envio 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></a>

                  </p>
                  <div class="row">
                    <div class="">
                      <div class="collapse multi-collapse " id="multiCollapseExample1">
                        <div class="">
                          <form id="form_customer" autocomplete="on" className="has-validation-callback">
                            <div className="row">
                              <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                                {/* Form DNI */}
                                <input class="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI"/>
                              </div>

                              <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                                {/* Form Company */}
                                <input class="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="Email" />
                              </div>
                            </div>
                            <div className="row">
                              <div>

                                {/* Form Street */}
                                <input class="form-control form-control-sm my-1" type="text" placeholder="Dirección" aria-label="Email" />
                              </div>
                            </div>

                            <div className="row">
                              <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                                {/* Form Country */}
                                <input class="form-control form-control-sm" type="text" placeholder="País" aria-label="DNI"/>
                              </div>

                              <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                                {/* Form ZipCode */}
                                <input class="form-control form-control-sm" type="number" placeholder="Codigo Postal" aria-label="ZipCode" />
                              </div>
                            </div>

                            <div className="row">
                              <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                                {/* Form DNI */}
                                <input class="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI"/>
                              </div>

                              <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                                {/* Form Company */}
                                <input class="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="company" />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-5 col-xs-12-col-12"></div>

        </div>






        <div className="col-md-4 col-sm-5 col-xs-12 col-12">

        </div>
        {/* dirección de envio y datos personales */}

        <div className="col-md-8 col-sm-7 col-xs-12 col-12">

        </div>
      </div>

    </div>

  )
}
console.log("pagina pedido")

export default CheckoutCart