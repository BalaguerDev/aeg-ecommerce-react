import accounting from "accounting";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../../../components/basket/basket.css';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';


export default function basket(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const sinIva = itemsPrice * 0.79;
  const ivaCart = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 500 ? 0 : 12;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <div className="min-vh-100">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 className="display-6 fw-bolder text-center w-100">Finalizar su Pedido</h1>
            <p>Inicie sesión o registrese ➤ Completa los campos requeridos para procesar su compra ➤ Cualquier duda póngase en contacto al 935 322 901 (Lunes a Sábado de 7:00 a 17:00). </p>

            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col w-25 col-md-4 col-sm-5 col-xs-12-col-12">
            <div className="row">
              <div className="col-xs-12 col-12">
                <div className="row titleUser">
                  <h6 className="col d-flex justify-content-between align-items-center">Tus datos</h6>
                  <button type="button" id="opc_show_login" className="col btn btn-sm btn-outline-dark btn-xs float-lg-right">
                    Iniciar Sesion
                  </button>
                  <hr className="my-3" />
                </div>
              </div>

            </div>
            <form action="" id="form_customer" className="validation">
              <div className="row">
                {/* Form Email */}
                <input className="form-control form-control-sm my-2" type="text" placeholder="Nombre completo" aria-label="Email" />
              </div>
              <div className="row">
                {/* Form Name */}
                <input className="form-control form-control-sm my-2" type="text" placeholder="Email" aria-label="Email" />
              </div>

              <div className="d-flex justify-content-between mt-5  border-top w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                <h6 className="pt-1">Información de Envio</h6>
                <ArrowCircleDownIcon className="pt-1" />
              </div>
              <div>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                 
                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">
                      {/* Form DNI */}
                      <input className="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI" />
                    </div>

                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                      {/* Form Company */}
                      <input className="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="Email" />
                    </div>
                  </div>

                  <div className="row">
                    <div>
                      {/* Form Street */}
                      <input className="form-control form-control-sm my-1" type="text" placeholder="Dirección" aria-label="Email" />
                    </div>
                  </div>

                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">
                      {/* Form Country */}
                      <input className="form-control form-control-sm" type="text" placeholder="País" aria-label="DNI" />
                    </div>
                    
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">
                      {/* Form ZipCode */}
                      <input className="form-control form-control-sm" type="number" placeholder="Codigo Postal" aria-label="ZipCode" />
                    </div>
                  </div>

                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">
                      {/* Form DNI */}
                      <input className="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI" />
                    </div>

                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">
                      {/* Form Company */}
                      <input className="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="company" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </form>



          </div>


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
                <form id="form_customer" className="has-validation-callback">
                  <div className="row">
                    <div>

                      {/* Form Email */}
                      <input className="form-control form-control-sm my-1" type="text" placeholder="Email" aria-label="Email" />
                    </div>
                  </div>

                  <div className="row">
                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                      {/* Form Name */}
                      <input className="form-control form-control-sm" type="text" placeholder="Nombre" aria-label="Email" />
                    </div>

                    <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                      {/* Form LastName */}
                      <input className="form-control form-control-sm" type="text" placeholder="Apellido" aria-label="Email" />
                    </div>
                  </div>

                </form>
                <p>
                  <a className="btn btn-outline-dark btn-block btn-lg" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Información de envio
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg></a>

                </p>
                <div className="row">
                  <div className="">
                    <div className="collapse multi-collapse " id="multiCollapseExample1">
                      <div className="">
                        <form id="form_customer" className="has-validation-callback">
                          <div className="row">
                            <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                              {/* Form DNI */}
                              <input className="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI" />
                            </div>

                            <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                              {/* Form Company */}
                              <input className="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="Email" />
                            </div>
                          </div>
                          <div className="row">
                            <div>

                              {/* Form Street */}
                              <input className="form-control form-control-sm my-1" type="text" placeholder="Dirección" aria-label="Email" />
                            </div>
                          </div>

                          <div className="row">
                            <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                              {/* Form Country */}
                              <input className="form-control form-control-sm" type="text" placeholder="País" aria-label="DNI" />
                            </div>

                            <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-2">

                              {/* Form ZipCode */}
                              <input className="form-control form-control-sm" type="number" placeholder="Codigo Postal" aria-label="ZipCode" />
                            </div>
                          </div>

                          <div className="row">
                            <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                              {/* Form DNI */}
                              <input className="form-control form-control-sm" type="text" placeholder="DNI / NIF / CIF" aria-label="DNI" />
                            </div>

                            <div id="field_customer_firstname" className="form-group col-xs-6 col-6 required has-success my-3">

                              {/* Form Company */}
                              <input className="form-control form-control-sm" type="text" placeholder="Empresa" aria-label="company" />
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

        <div className="col-md-4 col-sm-5 col-xs-12-col-12">

          <aside className="block my-0">

            <div className="scrollElement">
              {cartItems.length === 0 && <div>El carrito esta vacio</div>}
              {cartItems.map((item) => (

                <div key={item.id}>
                  <div className="row itemDivCart row align-items-center">
                    <div className="col">
                      <img src={item.img} alt={item.name} className="img-fluid" data-bs-toggle="modal" data-bs-target={"#product" + item.id} />
                    </div>

                    <div className="col-10">
                      <div className="col d-flex justify-content-between align-items-center">
                        <p className="titleNameCard my-2  w-75 " data-bs-toggle="modal" data-bs-target={"#product" + item.id} >{item.title}</p>
                        <DeleteOutlineIcon className=" deleteButton w-25" onClick={() => onDelete(item)} />
                      </div>

                      <div className="col d-flex justify-content-between align-items-center">
                        <div className="w-75">
                          <span className="col-6 text-muted ">{item.qty} x </span> &nbsp;{accounting.formatMoney(item.price, { symbol: "€", format: "%v %s" })}
                        </div>

                        <div className="w-25 d-flex justify-content-around">
                          <RemoveCircleOutlineIcon className=" removeButton" onClick={() => onRemove(item)} />
                          <AddCircleOutlineIcon className=" addButton" onClick={() => onAdd(item)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                </div>

              ))}
            </div>
            {cartItems.length !== 0 && (
              <>
                <div className="row mt-3">
                  <div className="col-2">Coste sin iva</div>
                  <div className="col-1 d-flex justify-content-end">{sinIva.toFixed(2)} €</div>
                </div>
                <div className="row iva">
                  <div className="col-2">Iva 21%</div>
                  <div className="col-1 d-flex justify-content-end">{ivaCart.toFixed(2)} €</div>
                </div>


                <div className="row">
                  <div className="col-2">Envio</div>
                  <div className="col-1 d-flex justify-content-end">{shippingPrice.toFixed(2)} €</div>
                </div>
                <div className="row my-1">
                  <div className="col-2">Precio Total</div>
                  <div className="col-1 d-flex justify-content-end"><strong>{totalPrice.toFixed(2)} €</strong></div>
                </div>
                <div className="row my-2">

                </div>
              </>
            )}
          </aside>

        </div>

      </div>


    </div>



  )

}


