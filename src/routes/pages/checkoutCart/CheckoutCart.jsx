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

        <div className="col-xs-12 col-12">
          <div className="row">
            {/* dirección de envio y datos personales */} 
            <div className="col-md-4 col-sm-5 col-xs-12 col-12">

            </div>
            {/* dirección de envio y datos personales */} 

            <div className="col-md-8 col-sm-7 col-xs-12 col-12">

            </div>
          </div>

        </div>
    </div>
  </div>
  )
}
console.log("pagina pedido")

export default CheckoutCart