import React from 'react'

const CheckoutCart = () => {
  return (

    <div>
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
                <div className="rowcheckoutStepOne">
                  <h6 className="col d-flex justify-content-around align-items-center mx-2">
                    Tus datos
                    <button type="button" id="opc_show_login" className="col btn btn-sm btn-outline-dark btn-xs float-lg-right">
                      Iniciar Sesion
                    </button>
                  </h6>

                  <form id="form_customer" autocomplete="on" className="has-validation-callback">
                    <div className="row">
                      <div>
                        <input class="form-control form-control-sm" type="text" placeholder="Email" aria-label="Email" />
                      </div>

                    </div>
                    <div className="row">

                      <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success">
                        <label for="customer_firstname">
                          Nombre:
                          <sup>*</sup>
                        </label>
                        <input id="customer_firstname" name="customer_firstname" type="text" className="customer required form-control input-sm not_unifrom not_uniform  capitalize valid" data-field-name="firstname" data-validation="isName,length " data-default-value="." data-required="1" data-validation-length="max32" maxlength="32" />
                      </div>




                      <div id="field_customer_lastname" className="form-group col-xs-6 col-6 required ">
                        <label for="customer_lastname">
                          Apellidos:
                          <sup>*</sup>
                        </label>
                        <input id="customer_lastname" name="customer_lastname" type="text" className="customer required form-control input-sm not_unifrom not_uniform  capitalize" data-field-name="lastname" data-validation="isName,length " data-default-value="." data-required="1" data-validation-length="max32" maxlength="32" />
                      </div>

                    </div>
                    <div className="row">



                      <div id="field_customer_email" className="form-group col-xs-12 col-12 required clear clearfix">
                        <label for="email_confirmation">
                          Correo electrónico:
                          <sup>*</sup>
                        </label>
                        <input id="customer_email" name="email_confirmation" type="email" className="customer required form-control input-sm not_unifrom not_uniform" data-field-name="email" data-validation="isEmail " data-default-value="" data-required="1" />
                      </div>

                    </div>
                    <div className="row">



                      <div id="field_customer_checkbox_create_account_guest" className="form-group col-xs-12 col-12  clear clearfix">
                        <label for="checkbox_create_account_guest">
                          <input id="checkbox_create_account_guest" name="checkbox_create_account_guest" type="checkbox" className="not_unifrom not_uniform" data-field-name="checkbox_create_account_guest" data-default-value="0" data-required="0" data-validation-optional="true" />
                          Crear una cuenta y disfrutar los beneficios de un cliente registrado.
                          <sup></sup>
                        </label>
                      </div>

                    </div>



                  </form>



                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-5 col-xs-12-col-12"></div>

        </div>



        <div className="form-floating mb-3">
          <input type="email" className="customer form-control input-sm not_unifrom not_uniform" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">E-mail</label>
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